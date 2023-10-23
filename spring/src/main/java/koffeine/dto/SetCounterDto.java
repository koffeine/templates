package koffeine.dto;

import jakarta.validation.constraints.NotNull;

public record SetCounterDto(@NotNull Long value) {

}
