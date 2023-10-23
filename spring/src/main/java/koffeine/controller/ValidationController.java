package koffeine.controller;

import jakarta.validation.Valid;
import koffeine.dto.Validatable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ValidationController {

	@PostMapping("/validate")
	public String validate(@Valid @RequestBody Validatable validatable) {
		return "ok";
	}

}
