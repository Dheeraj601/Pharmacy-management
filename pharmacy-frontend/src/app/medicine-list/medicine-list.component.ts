import { Component, OnInit } from '@angular/core';
import { Medicine } from "../medicine";
import { MedicineService } from "../medicine.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit{

  medicines!: Medicine[];   // !

  constructor(private medicineService: MedicineService, 
    private router: Router) {
    // this.medicines = [];
  }

  ngOnInit(): void {
  this.getMedicines();

//     this.medicines =[{
//       "mid": 2012,
//       "mname": "Evion-400",
//       "mfgBy": "Evion",
//       "mfgDate":"12-03-2021",
//       "expDate": "12-03-2024",
//       "price":200,
//       "qty":1
//   },
//   {
//     "mid": 2014,
//     "mname": "Paracitamol-20mg",
//     "mfgBy": "Paracitamol",
//     "mfgDate":"12-03-2021",
//     "expDate": "12-03-2024",
//     "price":60,
//     "qty":1
// }
//   ];
  }

  private getMedicines(){
    this.medicineService.getMedicineList().subscribe(data => {
      this.medicines = data;
    })
  }

  updateMedicine(mid:number){
    this.router.navigate(['/update-medicine',mid]);
  }
  deleteMedicine(mid:number){
    this.medicineService.deleteMedicine(mid).subscribe(data => {
      console.log(data);
      this.getMedicines();
    })
  }
  medicineDetails(mid: number){
    this.router.navigate(['/medicine-details',mid]);
  }
}
