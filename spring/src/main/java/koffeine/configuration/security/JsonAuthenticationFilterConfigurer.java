package koffeine.configuration.security;

import org.springframework.context.ApplicationContext;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.security.config.annotation.web.HttpSecurityBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractAuthenticationFilterConfigurer;
import org.springframework.security.web.servlet.util.matcher.PathPatternRequestMatcher;
import org.springframework.security.web.util.matcher.AndRequestMatcher;
import org.springframework.security.web.util.matcher.MediaTypeRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;
import tools.jackson.databind.ObjectMapper;

public class JsonAuthenticationFilterConfigurer<H extends HttpSecurityBuilder<H>>
	extends AbstractAuthenticationFilterConfigurer<H, JsonAuthenticationFilterConfigurer<H>, JsonAuthenticationProcessingFilter> {

	public JsonAuthenticationFilterConfigurer() {
		super(new JsonAuthenticationProcessingFilter(), null);
	}

	public static JsonAuthenticationFilterConfigurer<HttpSecurity> jsonLogin() {
		return new JsonAuthenticationFilterConfigurer<>();
	}

	public JsonAuthenticationFilterConfigurer<H> usernameParameter(String usernameParameter) {
		getAuthenticationFilter().setUsernameParameter(usernameParameter);
		return this;
	}

	public JsonAuthenticationFilterConfigurer<H> passwordParameter(String passwordParameter) {
		getAuthenticationFilter().setPasswordParameter(passwordParameter);
		return this;
	}

	@Override
	protected RequestMatcher createLoginProcessingUrlMatcher(String loginProcessingUrl) {
		return new AndRequestMatcher(
			new MediaTypeRequestMatcher(MediaType.APPLICATION_JSON),
			PathPatternRequestMatcher.withDefaults().matcher(HttpMethod.POST, loginProcessingUrl));
	}

	@Override
	public void configure(H http) {
		getAuthenticationFilter().setObjectMapper(http.getSharedObject(ApplicationContext.class).getBean(ObjectMapper.class));

		super.configure(http);
	}

}
