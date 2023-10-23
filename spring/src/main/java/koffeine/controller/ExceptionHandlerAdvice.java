package koffeine.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.TypeMismatchException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * Based on {@link org.springframework.web.servlet.mvc.support.DefaultHandlerExceptionResolver#doResolveException}
 */
@RestControllerAdvice
public class ExceptionHandlerAdvice {

	private static final Logger LOGGER = LoggerFactory.getLogger(ExceptionHandlerAdvice.class);

	@ExceptionHandler
	@ResponseStatus(HttpStatus.FORBIDDEN)
	public void accessDeniedException(AccessDeniedException exception) {
		LOGGER.debug(exception.getMessage());
	}

	@ExceptionHandler
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public void typeMismatchException(TypeMismatchException exception) {
		LOGGER.debug(exception.getMessage());
	}

	@ExceptionHandler
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public void httpMessageNotReadableException(HttpMessageNotReadableException exception) {
		LOGGER.debug(exception.getMessage());
	}

	@ExceptionHandler
	public ResponseEntity<?> exception(Exception exception) {
		if (exception instanceof ErrorResponse errorResponse) {
			var statusCode = errorResponse.getStatusCode();

			if (statusCode.is5xxServerError()) {
				LOGGER.error(exception.getMessage(), exception);
			} else {
				LOGGER.debug(exception.getMessage());
			}

			return ResponseEntity.status(statusCode).headers(errorResponse.getHeaders()).build();
		} else {
			LOGGER.error(exception.getMessage(), exception);
			return ResponseEntity.internalServerError().build();
		}
	}

}
