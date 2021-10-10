package koffeine;

import koffeine.controller.IndexController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(IndexController.class)
class IndexControllerTest {

	@Autowired
	MockMvc mockMvc;

	@Test
	void testIndex() throws Exception {
		mockMvc
			.perform(get("/"))
			.andExpect(status().isOk())
			.andExpect(content().string(""));
	}

	@Test
	void testNotFound() throws Exception {
		mockMvc
			.perform(get("/not-found"))
			.andExpect(status().isNotFound())
			.andExpect(content().string(""));
	}

}
