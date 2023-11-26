package ca.canhs.back.service;

import ca.canhs.back.model.Package;
import ca.canhs.back.repository.PackageRepository;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

@Service
public class PackageServiceImpl extends CrudServiceImpl<Package, PackageRepository, UUID> implements PackageService {
    public PackageServiceImpl(PackageRepository crudRepository) {
        super(crudRepository);
    }


    @Override
    public Set<Package> findByClientId(UUID id) {
        return crudRepository.findByClientId(id);
    }
}
