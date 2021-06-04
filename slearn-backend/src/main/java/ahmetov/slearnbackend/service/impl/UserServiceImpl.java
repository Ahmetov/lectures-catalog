package ahmetov.slearnbackend.service.impl;

import ahmetov.slearnbackend.constant.AppRoles;
import ahmetov.slearnbackend.dao.RoleRepository;
import ahmetov.slearnbackend.dao.UserRepository;
import ahmetov.slearnbackend.exception.NotFoundException;
import ahmetov.slearnbackend.model.AppUser;
import ahmetov.slearnbackend.model.Role;
import ahmetov.slearnbackend.model.dto.RegistrationDto;
import ahmetov.slearnbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    @Override
    public List<AppUser> getAll() {
        return userRepository.findAll();
    }

    @Override
    public AppUser getById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Пользователь не найден"));
    }

    @Override
    public void delete(Long id) {
        AppUser appUser = getById(id);
        userRepository.delete(appUser);
    }

    @Override
    @Transactional
    public void update(AppUser appUser) {
        if (appUser.getId() != null || userRepository.findById(appUser.getId()).isPresent()) {
            userRepository.save(appUser);
        } else {
            throw new NotFoundException("Пользователя в базе данных не существует");
        }
    }

    @Override
    public void create(AppUser appUser) {
        appUser.setPassword(
                passwordEncoder.encode(appUser.getPassword())
        );
        userRepository.save(appUser);
    }

    @Override
    @Transactional
    public void registration(RegistrationDto registrationDto) {
        if (userRepository.findByEmail(registrationDto.getEmail()).isPresent()) {
            throw new RuntimeException("Пользователь с такой почтой уже существует");
        }

        if (!registrationDto.getPassword().equals(registrationDto.getPasswordRepeat())) {
            throw new RuntimeException("Пароли не совпадают");
        }

        AppUser newUser = new AppUser();
        newUser.setFirstname(registrationDto.getFirstname());
        newUser.setLastname(registrationDto.getLastname());
        newUser.setAddress(registrationDto.getAddress());
        newUser.setPhone(registrationDto.getPhone());
        newUser.setEmail(registrationDto.getEmail());
        newUser.setPassword(
                passwordEncoder.encode(registrationDto.getPassword())
        );
        newUser.setAuthorities(Collections.singleton(new SimpleGrantedAuthority("student")));
        newUser.setRoles(
                Collections.singletonList(roleRepository.findByName(AppRoles.STUDENT))
        );
        userRepository.save(newUser);
    }

    @Override
    public List<Role> getRolesOfCurrentUser() {
        return SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream().map(a-> new Role(a.getAuthority()))
                .collect(Collectors.toList());
    }
}
