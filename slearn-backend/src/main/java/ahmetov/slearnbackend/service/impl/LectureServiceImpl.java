package ahmetov.slearnbackend.service.impl;

import ahmetov.slearnbackend.dao.LectureRepository;
import ahmetov.slearnbackend.exception.NotFoundException;
import ahmetov.slearnbackend.model.Lecture;
import ahmetov.slearnbackend.service.LectureService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LectureServiceImpl implements LectureService {

    private final LectureRepository lectureRepository;

    @Override
    public List<Lecture> getAll() {
        return lectureRepository.findAll();
    }

    @Override
    public Lecture getById(Long id) {
        return lectureRepository.findAllById(id)
                .orElseThrow(() -> new NotFoundException("Лекция не найдена"));
    }

    @Override
    public void delete(Long id) {
        Lecture user = getById(id);
        lectureRepository.delete(user);
    }

    @Override
    public void update(Lecture lecture) {
        if (lecture.getId() == null) {
            lectureRepository.save(lecture);
        } else {
            throw new NotFoundException("Лекции в базе данных не существует");
        }
    }

    @Override
    public void create(Lecture lecture) {
        lectureRepository.save(lecture);
    }
}
