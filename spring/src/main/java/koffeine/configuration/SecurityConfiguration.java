package koffeine.configuration;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.servlet.util.matcher.PathPatternRequestMatcher;
import org.springframework.security.web.util.matcher.AndRequestMatcher;
import org.springframework.security.web.util.matcher.MediaTypeRequestMatcher;

import static koffeine.configuration.security.JsonAuthenticationFilterConfigurer.jsonLogin;

@Configuration
@EnableMethodSecurity
public class SecurityConfiguration {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) {
		// @formatter:off
		return http
			.csrf(AbstractHttpConfigurer::disable)
			.anonymous(AbstractHttpConfigurer::disable)
			.authorizeHttpRequests(customizer -> customizer
				.requestMatchers("/forbidden-by-web-security").hasAuthority("admin") // TEST 403
				.anyRequest().authenticated()
			)
			// JSON LOGIN
			.with(jsonLogin(), customizer -> customizer
				.loginProcessingUrl("/api/login")
				.successHandler((request, response, authentication) ->
					response.setStatus(HttpServletResponse.SC_OK))
				.failureHandler((request, response, exception) ->
					response.setStatus(HttpServletResponse.SC_UNAUTHORIZED))
			)
			// FORM LOGIN
			.formLogin(customizer -> customizer
				.loginProcessingUrl("/api/login")
				.successHandler((request, response, authentication) ->
					response.setStatus(HttpServletResponse.SC_OK))
				.failureHandler((request, response, exception) ->
					response.setStatus(HttpServletResponse.SC_UNAUTHORIZED))
			)
			// LOGOUT
//			.logout(AbstractHttpConfigurer::disable) // FOR OAuth 2.0
			.logout(customizer -> customizer
				// JSON LOGOUT
				.logoutRequestMatcher(new AndRequestMatcher(
					new MediaTypeRequestMatcher(MediaType.APPLICATION_JSON),
					PathPatternRequestMatcher.withDefaults().matcher(HttpMethod.POST, "/api/logout")))
				// FORM LOGOUT
				.logoutRequestMatcher(PathPatternRequestMatcher.withDefaults().matcher(HttpMethod.POST, "/api/logout"))
				.logoutSuccessHandler((request, response, authentication) ->
					response.setStatus(HttpServletResponse.SC_OK))
			)
			.exceptionHandling(customizer -> customizer
				.authenticationEntryPoint((request, response, authException) ->
					response.setStatus(HttpServletResponse.SC_UNAUTHORIZED))
				.accessDeniedHandler((request, response, accessDeniedException) ->
					response.setStatus(HttpServletResponse.SC_FORBIDDEN)) // TEST 403: only required if forbid-able by web security
			)
//			.oauth2ResourceServer(customizer -> customizer.jwt(configurer -> {})) // FOR OAuth 2.0
//			.sessionManagement(customizer -> customizer.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // FOR OAuth 2.0
			.build();
		// @formatter:on
	}

	@Bean
	public InMemoryUserDetailsManager userDetailsService() {
		return new InMemoryUserDetailsManager(
			User.withUsername("user").password("{noop}pass").authorities("user").build()
		);
	}

}
