package koffeine.configuration;

import koffeine.configuration.properties.CorsProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {

	private final CorsProperties corsProperties;

	public WebMvcConfiguration(CorsProperties corsProperties) {
		this.corsProperties = corsProperties;
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry
			.addMapping("/**")
			.allowedOrigins(corsProperties.getAllowedOrigins());
	}

}
