package ca.canhs.back.controller;

import ca.canhs.back.model.Client;
import ca.canhs.back.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.UUID;

@RestController
@RequestMapping("api/client")
@CrossOrigin
public class ClientCtrl {
    private final ClientService clientService;

    public ClientCtrl(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping("")
    public ResponseEntity<Collection<Client>> getAll() {
        return new ResponseEntity<>(clientService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("")
    public ResponseEntity<HttpStatus> deleteAll() {
        clientService.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getById(@PathVariable UUID id) {
        return clientService.findById(id)
                .map(client -> new ResponseEntity<>(client, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteById(@PathVariable UUID id) {
        try {
            clientService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("")
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        return new ResponseEntity<>(clientService.save(
                Client.builder()
                        .firstName(client.getFirstName())
                        .lastName(client.getLastName())
                        .build()
        ), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Client> updateById(@PathVariable UUID id, @RequestBody Client client) {
        return clientService.findById(id)
                .map(existing -> new ResponseEntity<>(
                        clientService.save(existing
                                .setFirstName(client.getFirstName())
                                .setLastName(client.getLastName())
                        ), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
