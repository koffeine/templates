package koffeine.configuration.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.util.Assert;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.Map;

public class JsonAuthenticationProcessingFilter extends UsernamePasswordAuthenticationFilter {

	private ObjectMapper objectMapper;

	public void setObjectMapper(ObjectMapper objectMapper) {
		this.objectMapper = objectMapper;
	}

	@Override
	public void afterPropertiesSet() {
		super.afterPropertiesSet();

		Assert.notNull(objectMapper, "objectMapper must be specified");
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
		throws AuthenticationException {

		try {
			Map<?, ?> json = objectMapper.readValue(request.getInputStream(), Map.class);

			if (json != null) {
				request.setAttribute(getUsernameParameter(), json.get(getUsernameParameter()));
				request.setAttribute(getPasswordParameter(), json.get(getPasswordParameter()));
			}
		} catch (IOException e) {
			throw new RuntimeException(e);
		}

		return super.attemptAuthentication(request, response);
	}

	@Override
	protected String obtainUsername(HttpServletRequest request) {
		try {
			return (String) request.getAttribute(getUsernameParameter());
		} catch (ClassCastException e) {
			return null;
		}
	}

	@Override
	protected String obtainPassword(HttpServletRequest request) {
		try {
			return (String) request.getAttribute(getPasswordParameter());
		} catch (ClassCastException e) {
			return null;
		}
	}

}
