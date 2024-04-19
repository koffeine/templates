package koffeine.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.HttpHeaders;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(IndexController.class)
class IndexControllerTest extends AbstractControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@Test
	void testIndex() throws Exception {
		mockMvc
			.perform(get("/"))
			.andExpect(status().isOk())
			.andExpect(content().string(""));
	}

	@Test
	void testNoHandlerFound() throws Exception {
		mockMvc
			.perform(get("/not-found"))
			.andExpect(status().isNotFound())
			.andExpect(content().string(""));
	}

	@Test
	void testHttpRequestMethodNotSupportedException() throws Exception {
		mockMvc
			.perform(post("/"))
			.andExpect(status().isNotFound())
			.andExpect(content().string(""));
	}

	@Test
	void testCors() throws Exception {
		mockMvc
			.perform(get("/").header(HttpHeaders.ORIGIN, "http://not-allowed"))
			.andExpect(status().isForbidden())
			.andExpect(content().string("Invalid CORS request"));
	}

}
