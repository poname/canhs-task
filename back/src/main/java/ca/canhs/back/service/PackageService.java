package ca.canhs.back.service;

import ca.canhs.back.model.Package;

import java.util.Set;
import java.util.UUID;

public interface PackageService extends CrudService<Package, UUID> {
    Set<Package> findByClientId(UUID id);
}
