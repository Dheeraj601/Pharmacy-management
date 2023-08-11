import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMedicineComponent } from "./create-medicine/create-medicine.component";
import { MedicineListComponent } from "./medicine-list/medicine-list.component";
import { MedicineDetailsComponent } from "./medicine-details/medicine-details.component";
import { UpdateMedicineComponent } from "./update-medicine/update-medicine.component";

const routes: Routes = [
  {path: "medicines", component: MedicineListComponent},
  {path: "create-medicine", component: CreateMedicineComponent},
  {path: '', redirectTo:'medicines', pathMatch: 'full'},
  {path: "update-medicine/:mid", component: UpdateMedicineComponent},
  {path: "medicine-details/:mid", component: MedicineDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
