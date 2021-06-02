package ahmetov.slearnbackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegistrationResponse {
    private String message;

    public RegistrationResponse(String message) {
        this.message = message;
    }
}
