package com.ng.starter.bean;

import java.util.ArrayList;
import java.util.List;

public class Machines {
	public Machines(List<Laptop> machines) {
		super();
		this.machines = machines;
	}

	List<Laptop> machines=new ArrayList<>();

	public List<Laptop> getMachines() {
		return machines;
	}

	public void setMachines(List<Laptop> machines) {
		this.machines = machines;
	}
}
