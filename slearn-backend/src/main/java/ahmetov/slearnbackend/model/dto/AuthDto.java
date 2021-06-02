package ahmetov.slearnbackend.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
public class AuthDto {
    @Size(min = 1, max = 30, message = "Почта должна быть от 1 до 30 символов")
    @NotNull
    private String email;
    @Size(min = 1, max = 8, message = "Пароль должен быть от 1 до 8 символов")
    @NotNull
    private String password;
}
