package ahmetov.slearnbackend.web;

import ahmetov.slearnbackend.model.Lecture;
import ahmetov.slearnbackend.service.LectureService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lectures")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequiredArgsConstructor
public class LectureController {

    private final LectureService lectureService;

    @GetMapping
    @PreAuthorize("hasAuthority('student')")
    public List<Lecture> getAll() {
        return lectureService.getAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('student')")
    public Lecture getById(@PathVariable Long id) {
        return lectureService.getById(id);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('admin')")
    public void delete(@PathVariable Long id) {
        lectureService.delete(id);
    }

    @PutMapping()
    @PreAuthorize("hasAuthority('admin')")
    public void update(@RequestBody Lecture lecture) {
        lectureService.update(lecture);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('admin')")
    public void save(@RequestBody Lecture lecture) {
        lectureService.create(lecture);
    }
}
