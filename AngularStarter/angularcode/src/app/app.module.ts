import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkingComponentOneComponent } from './components/working-component-one/working-component-one.component';
import { WorkingComponentTwoComponent } from './components/working-component-two/working-component-two.component';
import {RestserviceService} from './services/rest-service/restservice.service';
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    WorkingComponentOneComponent,
    WorkingComponentTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    RestserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
