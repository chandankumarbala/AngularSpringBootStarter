import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from '../app.component'
import {WorkingComponentOneComponent} from '../components/working-component-one/working-component-one.component';
import {WorkingComponentTwoComponent} from '../components/working-component-two/working-component-two.component';
const routes: Routes = [
  {
      path: '',
      component: WorkingComponentOneComponent,
  },{
    path: 'link',
    component: WorkingComponentTwoComponent,
},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { 


}
