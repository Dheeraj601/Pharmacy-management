import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent {

  mid!: number;
  medicine!: Medicine;

  constructor(private route: ActivatedRoute ,private medicineService: MedicineService,
    private router:Router)
    {}

    ngOnInit(): void {
    this.mid=this.route.snapshot.params['mid'];
    this.medicineService.getMedicineById(this.mid).subscribe(data => {
      this.medicine=data;
    })
  }
  
  goBack(){
    this.router.navigate(['/medicines']);
  }
  
}
