package koffeine.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.util.StringUtils;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.NoHandlerFoundException;

@RestControllerAdvice
public class ExceptionController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ExceptionController.class);

	@ExceptionHandler({ NoHandlerFoundException.class, HttpRequestMethodNotSupportedException.class })
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public void notFound(HttpServletRequest request) {
		LOGGER.debug("Not found: {} {}", request.getMethod(), request.getRequestURI());
	}

	@ExceptionHandler(HttpMediaTypeNotSupportedException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public void httpMediaTypeNotSupported(HttpMediaTypeNotSupportedException e) {
		LOGGER.debug("HTTP media type not supported: {}", e.getContentType());
	}

	@ExceptionHandler(HttpMessageNotReadableException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public void httpMessageNotReadable() {
		LOGGER.debug("HTTP message not readable");
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public void methodArgumentNotValidException(MethodArgumentNotValidException e) {
		StringBuilder sb = new StringBuilder("Method argument not valid:");

		for (ObjectError objectError : e.getBindingResult().getAllErrors()) {
			sb.append("\n").append(StringUtils.capitalize(objectError.getObjectName()));

			if (objectError instanceof FieldError fieldError) {
				sb.append(".").append(fieldError.getField());
			}

			sb.append(": ").append(objectError.getDefaultMessage());
		}

		LOGGER.debug(sb.toString());
	}

	@ExceptionHandler(Throwable.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	public void throwable(Throwable throwable) {
		LOGGER.error("Error during execution", throwable);
	}

}
