package com.flat0.crud.exception;

public class ValidationException extends Exception{
    private String message;

    public ValidationException(String message){
        this.message=message;
    }

    @Override
    public String getMessage() {
        return message;
    }
}