package ca.canhs.back.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Operation Not Successful")
public class NotSuccessfulException extends RuntimeException {
    public NotSuccessfulException() {
    }

    public NotSuccessfulException(String message) {
        super(message);
    }

    public NotSuccessfulException(String message, Throwable cause) {
        super(message, cause);
    }

    public NotSuccessfulException(Throwable cause) {
        super(cause);
    }

    public NotSuccessfulException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
