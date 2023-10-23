package koffeine.service;

import koffeine.dto.GetCounterDto;
import koffeine.dto.SetCounterDto;
import koffeine.entity.Counter;
import koffeine.repository.CounterRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CounterService {

	private static final long ID = 1;

	private final CounterRepository counterRepository;

	public CounterService(CounterRepository counterRepository) {
		this.counterRepository = counterRepository;
	}

	public GetCounterDto get() {
		return map(
			counterRepository
				.findById(ID)
				.orElseGet(() -> counterRepository.save(new Counter()))
		);
	}

	public GetCounterDto set(SetCounterDto dto) {
		var index = counterRepository
			.findById(ID)
			.orElse(new Counter());

		index.setValue(dto.value());

		return map(counterRepository.save(index));
	}

	private GetCounterDto map(Counter counter) {
		return new GetCounterDto(counter.getValue());
	}

}
