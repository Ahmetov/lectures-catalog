package ahmetov.slearnbackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class JwtResponse {
    private String jwt;
}
