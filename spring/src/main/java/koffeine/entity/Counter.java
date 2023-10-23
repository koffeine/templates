package koffeine.entity;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Counter extends AbstractEntity {

	@Basic(optional = false)
	@Column(name = "\"value\"")
	private long value = 0;

	public long getValue() {
		return value;
	}

	public void setValue(long value) {
		this.value = value;
	}

}
