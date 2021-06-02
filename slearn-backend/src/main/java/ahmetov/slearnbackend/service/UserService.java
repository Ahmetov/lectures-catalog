package ahmetov.slearnbackend.service;

import ahmetov.slearnbackend.model.AppUser;
import ahmetov.slearnbackend.model.dto.RegistrationDto;

public interface UserService extends BaseService<AppUser, Long>{
    void registration(RegistrationDto registrationDto);
}
