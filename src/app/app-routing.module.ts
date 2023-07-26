import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormWrapperComponent } from './src/app/form-wrapper/form-wrapper.component';
import { SearchComponent } from './src/app/shared/search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FormWrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SearchComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
