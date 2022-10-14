package koffeine.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class ExceptionController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ExceptionController.class);

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public void methodArgumentNotValidException(MethodArgumentNotValidException e) {
		LOGGER.debug("Bad request {}", e.getMessage());
	}

	@ExceptionHandler(NoHandlerFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public void noHandlerFoundException(NoHandlerFoundException e) {
		LOGGER.debug("No handler found for url: {}", e.getRequestURL());
	}

	@ExceptionHandler(Throwable.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	public void throwable(Throwable throwable) {
		LOGGER.error("Error during execution", throwable);
	}

}
