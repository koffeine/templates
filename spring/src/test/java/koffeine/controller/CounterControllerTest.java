package koffeine.controller;

import koffeine.AbstractTest;
import koffeine.dto.SetCounterDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import tools.jackson.databind.ObjectMapper;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class CounterControllerTest extends AbstractTest {

	@Autowired
	MockMvc mockMvc;

	@Autowired
	ObjectMapper objectMapper;

	@Test
	void testGet() throws Exception {
		mockMvc
			.perform(get("/counter"))
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.value").value(0L));
	}

	@Test
	void testSet() throws Exception {
		var dto = new SetCounterDto(0L);

		mockMvc
			.perform(
				post("/counter")
					.contentType(MediaType.APPLICATION_JSON)
					.content(objectMapper.writeValueAsString(dto))
			)
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.value").value(0L));
	}

}
