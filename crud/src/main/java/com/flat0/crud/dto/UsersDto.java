package com.flat0.crud.dto;

import lombok.Data;
import lombok.Builder;

@Builder
@Data
public class UsersDto {
    private Integer id;
    private String name;
    private String login;
    private String email;
}
