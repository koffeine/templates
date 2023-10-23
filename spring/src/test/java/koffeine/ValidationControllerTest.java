package koffeine;

import com.fasterxml.jackson.databind.ObjectMapper;
import koffeine.controller.AbstractControllerTest;
import koffeine.controller.ValidationController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Map;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ValidationController.class)
public class ValidationControllerTest extends AbstractControllerTest {

	@Autowired
	MockMvc mockMvc;

	@Autowired
	ObjectMapper objectMapper;

	@Test
	void testValid() throws Exception {
		mockMvc
			.perform(
				post("/validate")
					.contentType(MediaType.APPLICATION_JSON)
					.content(objectMapper.writeValueAsString(Map.of("value", "valid")))
			)
			.andExpect(status().isOk())
			.andExpect(content().string("ok"));
	}

	@Test
	void testInvalid() throws Exception {
		mockMvc
			.perform(
				post("/validate")
					.contentType(MediaType.APPLICATION_JSON)
					.content(objectMapper.writeValueAsString(Map.of()))
			)
			.andExpect(status().isBadRequest())
			.andExpect(content().string(""));
	}

}
