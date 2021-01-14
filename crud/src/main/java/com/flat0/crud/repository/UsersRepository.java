package com.flat0.crud.repository;

import com.flat0.crud.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Integer> {
    Users findByLogin(String login);
}
