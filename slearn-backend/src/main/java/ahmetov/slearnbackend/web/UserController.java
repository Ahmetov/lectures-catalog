package ahmetov.slearnbackend.web;

import ahmetov.slearnbackend.model.AppUser;
import ahmetov.slearnbackend.model.dto.AuthDto;
import ahmetov.slearnbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public List<AppUser> getAll() {
        return userService.getAll();
    }

    @GetMapping("/{id}")
    public AppUser getById(@PathVariable Long id) {
        return userService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        userService.delete(id);
    }

    @PutMapping("/{id}")
    public void update(@RequestBody AppUser appUser, @PathVariable Long id) {
        userService.update(appUser);
    }

    @PostMapping("/registration")
    public void save(@RequestBody AppUser appUser) {
        userService.create(appUser);
    }
}
