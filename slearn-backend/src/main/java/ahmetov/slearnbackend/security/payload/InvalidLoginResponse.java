package ahmetov.slearnbackend.security.payload;

import lombok.Getter;

@Getter
public class InvalidLoginResponse {
    private String username;
    private String password;

    public InvalidLoginResponse() {
        this.username = "Неверное имя пользователя";
        this.password = "Неверный пароль";
    }
}
