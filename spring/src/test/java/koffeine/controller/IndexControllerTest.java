package koffeine.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.HttpHeaders;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(IndexController.class)
public class IndexControllerTest extends AbstractControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@Test
	public void testIndex() throws Exception {
		mockMvc
			.perform(get("/"))
			.andExpect(status().isOk())
			.andExpect(content().string(""));
	}

	@Test
	public void testNotFound() throws Exception {
		mockMvc
			.perform(get("/not-found"))
			.andExpect(status().isNotFound())
			.andExpect(content().string(""));
	}

	@Test
	public void testCors() throws Exception {
		mockMvc
			.perform(get("/").header(HttpHeaders.ORIGIN, "http://not-allowed"))
			.andExpect(status().isForbidden())
			.andExpect(content().string("Invalid CORS request"));
	}

}
