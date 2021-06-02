package ahmetov.slearnbackend.service;

import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface BaseService<T, ID> {
    List<T> getAll();

    @Transactional(readOnly = true)
    T getById(ID id);

    @Transactional
    void delete(ID id);

    void update(T obj);

    void create(T obj);
}
