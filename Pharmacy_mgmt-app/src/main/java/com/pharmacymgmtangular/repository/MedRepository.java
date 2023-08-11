package com.pharmacymgmtangular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pharmacymgmtangular.model.Medicine;

@Repository
public interface MedRepository extends JpaRepository<Medicine, Long>{

}
