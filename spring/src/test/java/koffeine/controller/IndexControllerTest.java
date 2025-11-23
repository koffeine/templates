package koffeine.controller;

import koffeine.configuration.properties.CorsProperties;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.HttpHeaders;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(IndexController.class)
class IndexControllerTest extends AbstractControllerTest {

	@Autowired
	MockMvc mockMvc;

	@Autowired
	CorsProperties corsProperties;

	@Test
	void testIndex() throws Exception {
		mockMvc
			.perform(get("/"))
			.andExpect(status().isOk());
	}

	@Test
	void testCorsWithInvalidOrigin() throws Exception {
		mockMvc
			.perform(get("/").header(HttpHeaders.ORIGIN, "http://invalid"))
			.andExpect(status().isForbidden());
	}

	@Test
	void testCorsWithValidOrigin() throws Exception {
		mockMvc
			.perform(get("/").header(HttpHeaders.ORIGIN, corsProperties.getAllowedOrigins()))
			.andExpect(status().isOk());
	}

}
