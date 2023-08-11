import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { Medicine } from "../medicine";
import { MedicineService } from "../medicine.service";

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit 
{

  mid!: number;
  medicine: Medicine = new Medicine();

  constructor(private route: ActivatedRoute, private router: Router,
    private medicineService: MedicineService) {
  }

  ngOnInit(): void{

    this.mid = this.route.snapshot.params['mid'];

    this.medicineService.getMedicineById(this.mid).subscribe(data=>{
        this.medicine=data;
    });
}
  onSubmit(){
    this.medicineService.updateMedicine(this.mid, this.medicine).subscribe(data => {
        this.gotoMedicineList();
      });
  }

  gotoMedicineList(){
    this.router.navigate(['/medicines']);
  }
}