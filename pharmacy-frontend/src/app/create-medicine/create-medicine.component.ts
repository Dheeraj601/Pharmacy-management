import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Medicine } from "../medicine";
import { MedicineService } from "../medicine.service";

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent implements OnInit{
  
  medicine: Medicine = new Medicine();
  // submitted=false;

  constructor(private medicineService: MedicineService,
    private router: Router) {
    
  }

  ngOnInit(): void {

  }

  // newMedicine():void{
  //   this.submitted=false;
  //   this.medicine = new Medicine();
  // }

  saveMedicine(){
    this.medicineService.createMedicine(this.medicine).subscribe(data => {
      console.log(data);
      this.gotoMedicineList();
    });
    
  }

  gotoMedicineList(){
    this.router.navigate(['/medicines']);
  }

  onSubmit(){
    console.log(this.medicine);   //this is form data after submit it stores
    // this.submitted=true;
    this.saveMedicine();
  }
}
