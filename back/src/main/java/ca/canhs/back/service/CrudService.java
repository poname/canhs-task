package ca.canhs.back.service;

import java.util.Optional;
import java.util.Set;

public interface CrudService<T, ID> {
    Optional<T> findById(ID id);

    T save(T t);

    Set<T> findAll();
    boolean existsById(ID id);

    void delete(T t);

    void deleteById(ID id);
    void deleteAll();
}
