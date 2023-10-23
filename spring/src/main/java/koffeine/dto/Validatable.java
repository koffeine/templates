package koffeine.dto;

import jakarta.validation.constraints.NotNull;

public record Validatable(
	@NotNull String value
) {

}
