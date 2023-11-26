package ca.canhs.back.service;

import ca.canhs.back.model.Client;
import ca.canhs.back.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ClientServiceImpl extends CrudServiceImpl<Client, ClientRepository, UUID> implements ClientService {
    public ClientServiceImpl(ClientRepository crudRepository) {
        super(crudRepository);
    }
}
