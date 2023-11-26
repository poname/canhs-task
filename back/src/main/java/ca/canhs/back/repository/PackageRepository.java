package ca.canhs.back.repository;

import ca.canhs.back.model.Package;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;
import java.util.UUID;

public interface PackageRepository extends CrudRepository<Package, UUID> {
    Set<Package> findByClientId(UUID id);
}
