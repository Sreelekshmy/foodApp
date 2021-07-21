import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodDonorPage } from './food-donor.page';

const routes: Routes = [
  {
    path: '',
    component: FoodDonorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodDonorPageRoutingModule {}
