package ahmetov.slearnbackend.service;

import ahmetov.slearnbackend.model.AppUser;
import ahmetov.slearnbackend.model.Role;
import ahmetov.slearnbackend.model.dto.RegistrationDto;

import java.util.List;

public interface UserService extends BaseService<AppUser, Long>{
    void registration(RegistrationDto registrationDto);
    List<Role> getRolesOfCurrentUser();
}
