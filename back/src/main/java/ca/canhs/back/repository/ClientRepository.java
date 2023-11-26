package ca.canhs.back.repository;

import ca.canhs.back.model.Client;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface ClientRepository extends CrudRepository<Client, UUID> {

}
