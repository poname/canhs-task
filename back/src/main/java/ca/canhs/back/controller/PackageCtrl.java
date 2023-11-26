package ca.canhs.back.controller;

import ca.canhs.back.model.Client;
import ca.canhs.back.model.Package;
import ca.canhs.back.service.ClientService;
import ca.canhs.back.service.PackageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.UUID;

@RestController
@RequestMapping("api/package")
@CrossOrigin
public class PackageCtrl {
    private final PackageService packageService;
    private final ClientService clientService;

    public PackageCtrl(PackageService packageService, ClientService clientService) {
        this.packageService = packageService;
        this.clientService = clientService;
    }

    @GetMapping("")
    public ResponseEntity<Collection<Package>> getAll() {
        return new ResponseEntity<>(packageService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("")
    public ResponseEntity<HttpStatus> deleteAll() {
        packageService.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Package> getById(@PathVariable UUID id) {
        return packageService.findById(id)
                .map(pack -> new ResponseEntity<>(pack, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteById(@PathVariable UUID id) {
        try {
            packageService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<Collection<Package>> getByClientId(@PathVariable UUID clientId) {
        if (clientService.existsById(clientId)) {
            return new ResponseEntity<>(packageService.findByClientId(clientId), HttpStatus.OK);
        } else {
            throw new NotSuccessfulException("Not found client with id = " + clientId);
        }
    }

    @PostMapping("/client/{clientId}")
    public ResponseEntity<Package> createPackage(@RequestBody Package pack, @PathVariable UUID clientId) {
        Package saved = clientService.findById(clientId)
                .map(client -> packageService.save(pack.setClient(client)))
                .orElseThrow(() -> new NotFoundException("Not found client with id = " + clientId));
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Package> updateById(@PathVariable UUID id, @RequestBody Package pack) {
        Client client = clientService.findById(pack.getClient().getId())
                .orElseThrow(() -> new NotFoundException("Not found client with id = " + pack.getClient().getId()));
        return packageService.findById(id)
                .map(existing -> new ResponseEntity<>(packageService.save(existing.setName(pack.getName()).setClient(client)), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
