package com.pharmacymgmtangular;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.pharmacymgmtangular.model")
public class PharmacyMgmtAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(PharmacyMgmtAppApplication.class, args);
	}

}
