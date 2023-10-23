package koffeine.controller;

import jakarta.validation.Valid;
import koffeine.dto.GetCounterDto;
import koffeine.dto.SetCounterDto;
import koffeine.service.CounterService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/counter")
public class CounterController {

	private final CounterService counterService;

	public CounterController(CounterService counterService) {
		this.counterService = counterService;
	}

	@GetMapping
	public GetCounterDto get() {
		return counterService.get();
	}

	@PostMapping
	public GetCounterDto set(@Valid @RequestBody SetCounterDto dto) {
		return counterService.set(dto);
	}

}
