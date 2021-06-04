package ahmetov.slearnbackend.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;

@Getter
@Setter
public class RegistrationDto {
    @Size(min = 1, max = 30, message = "Имя должно быть от 1 до 30 символов")
    private String firstname;
    @Size(min = 1, max = 30, message = "Фамилия должна быть от 1 до 30 символов")
    private String lastname;
    @Size(min = 1, max = 70, message = "Адресс должен быть от 1 до 70 символов")
    private String address;
    @Size(min = 1, max = 12, message = "Телефон должен быть от 1 до 12 символов")
    private String phone;
    @Size(min = 1, max = 30, message = "Почта должна быть от 1 до 30 символов")
    private String email;
    @Size(min = 1, max = 8, message = "Пароль должен быть от 1 до 8 символов")
    private String password;
    @Size(min = 1, max = 8, message = "Пароль должен быть от 1 до 8 символов")
    private String passwordRepeat;
}
