package com.ng.starter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import  com.ng.starter.bean.*;

@org.springframework.web.bind.annotation.RestController
//@CrossOrigin(origins = {"http://localhost:4200"})
@RequestMapping("/rest")
public class RestController {

	@RequestMapping("/getMachines")
	public Machines getLaptops(){
		List<Laptop> machines=new ArrayList<>();
		for(int i=0;i<5;i++){
			Laptop temp=new Laptop();
			temp.setId(String.valueOf(i+1));
			if(i%2==0){
			temp.setManufactured("HP");
			temp.setModel("DV"+i);
			}
			else{
				temp.setManufactured("Lenovo");
				temp.setModel("Z40"+i);
			}
				
			machines.add(temp);
		}
		
		return new Machines(machines);
	}
	
}
