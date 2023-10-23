package koffeine.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import koffeine.dto.Validatable;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ValidationController.class)
class ValidationControllerTest extends AbstractControllerTest {

	@Autowired
	MockMvc mockMvc;

	@Autowired
	ObjectMapper objectMapper;

	@Test
	void testHttpMediaTypeNotSupportedException() throws Exception {
		mockMvc
			.perform(
				post("/validate")
					.contentType(MediaType.APPLICATION_FORM_URLENCODED)
			)
			.andExpect(status().isBadRequest())
			.andExpect(content().string(""));
	}

	@Test
	void testHttpMessageNotReadableException() throws Exception {
		mockMvc
			.perform(
				post("/validate")
					.contentType(MediaType.APPLICATION_JSON)
			)
			.andExpect(status().isBadRequest())
			.andExpect(content().string(""));
	}

	@Test
	void testMethodArgumentNotValidException() throws Exception {
		mockMvc
			.perform(
				post("/validate")
					.contentType(MediaType.APPLICATION_JSON)
					.content(objectMapper.writeValueAsString(new Validatable(null)))
			)
			.andExpect(status().isBadRequest())
			.andExpect(content().string(""));
	}

	@Test
	void testValid() throws Exception {
		mockMvc
			.perform(
				post("/validate")
					.contentType(MediaType.APPLICATION_JSON)
					.content(objectMapper.writeValueAsString(new Validatable("valid")))
			)
			.andExpect(status().isOk())
			.andExpect(content().string("ok"));
	}

}
