import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThingComponent } from './create-thing/create-thing.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';




const routes: Routes = [
  
    { path: 'create', component: CreateThingComponent},
    // { path: '', component: AppComponent}
      
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
