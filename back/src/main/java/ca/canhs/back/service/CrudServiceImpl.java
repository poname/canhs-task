package ca.canhs.back.service;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public class CrudServiceImpl<T, S extends CrudRepository<T, ID>, ID extends UUID> implements CrudService<T, ID> {

    protected final S crudRepository;

    public CrudServiceImpl(S crudRepository) {
        this.crudRepository = crudRepository;
    }

    @Override
    public Optional<T> findById(ID id) {
        return crudRepository.findById(id);
    }

    @Override
    public T save(T t) {
        return crudRepository.save(t);
    }

    @Override
    public Set<T> findAll() {
        return StreamSupport.stream(crudRepository.findAll().spliterator(), false).collect(Collectors.toSet());
    }

    @Override
    public boolean existsById(ID id) {
        return crudRepository.existsById(id);
    }

    @Override
    public void delete(T t) {
        crudRepository.delete(t);
    }

    @Override
    public void deleteById(ID id) {
        crudRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        crudRepository.deleteAll();
    }
}
