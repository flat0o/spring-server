package com.flat0.crud.services;

import com.flat0.crud.dto.UsersDto;
import com.flat0.crud.entity.Users;
import org.springframework.stereotype.Component;

@Component
public class UsersConverter {
    public Users fromUserDtoToUser(UsersDto usersDto){
        return new Users(usersDto.getId(), usersDto.getName(), usersDto.getLogin(), usersDto.getEmail());
    }

    public UsersDto fromUserToUserDto(Users users){
        return UsersDto.builder()
                .id(users.getId())
                .name(users.getName())
                .login(users.getLogin())
                .email(users.getEmail())
                .build();
    }
}
