package com.pharmacymgmtangular.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pharmacymgmtangular.exception.ResourceNotFoundException;
import com.pharmacymgmtangular.model.Medicine;
import com.pharmacymgmtangular.repository.MedRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")  //
public class MedController {
	
	@Autowired
	private MedRepository medRepository;
	
	// get all medicine
	@GetMapping("/medicines")
	public List<Medicine> getAllMedicine(){
		return medRepository.findAll();
	}
	
//	create medicine rest api
	@PostMapping("/medicines")
	public Medicine createMedicine(@RequestBody Medicine medicine) {
		return medRepository.save(medicine);
	}
	
//	get medicine by id rest api
	@GetMapping("/medicines/{id}")
	public ResponseEntity<Medicine> getMedicineById(@PathVariable Long id){
		Medicine medicine = medRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Medicine doesn't exist with id :"+ id));
		return ResponseEntity.ok(medicine);
	}
	
//	update medicine rest api
	@PutMapping("/medicines/{id}")
	public ResponseEntity<Medicine> updateMedicine(@PathVariable Long id, @RequestBody Medicine medicineDetails){
		Medicine medicine = medRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Medicine doesn't exist with id :"+ id));
		
		medicine.setMname(medicineDetails.getMname());
		medicine.setMfgBy(medicineDetails.getMfgBy());
		medicine.setMfgDate(medicineDetails.getMfgDate());
		medicine.setExpDate(medicineDetails.getExpDate());
		medicine.setPrice(medicineDetails.getPrice());
		medicine.setQty(medicineDetails.getQty());
		
		Medicine updatedMedicine = medRepository.save(medicine);
		return ResponseEntity.ok(updatedMedicine);
	}
	
//	delete medicine rest api
	@DeleteMapping("/medicines/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteMedicine(@PathVariable Long id){
		Medicine medicine = medRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Medicine doesn't exist with id :"+ id));
		
		medRepository.delete(medicine);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
