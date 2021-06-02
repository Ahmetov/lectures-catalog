package ahmetov.slearnbackend.web;

import ahmetov.slearnbackend.model.dto.AuthDto;
import ahmetov.slearnbackend.model.dto.JwtResponse;
import ahmetov.slearnbackend.model.dto.RegistrationDto;
import ahmetov.slearnbackend.model.dto.RegistrationResponse;
import ahmetov.slearnbackend.security.JwtTokenProvider;
import ahmetov.slearnbackend.security.SecurityConstant;
import ahmetov.slearnbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;

    @PostMapping(value = "/auth", produces = "application/json")
    public ResponseEntity<Object> login(@RequestBody AuthDto authDto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                authDto.getEmail(),
                authDto.getPassword()
        ));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        JwtResponse jwt = new JwtResponse(SecurityConstant.TOKEN_PREFIX + tokenProvider.generateToken(authentication));

        return ResponseEntity.ok(jwt);
    }

    @PostMapping("/registration")
    public ResponseEntity<Object> registration(@RequestBody @Valid RegistrationDto user) {
        userService.registration(user);
        return ResponseEntity.ok(new RegistrationResponse("Юзер зарегистрирован"));
    }
}
