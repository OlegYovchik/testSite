import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCreateComponent } from './country-create/country-create.component';
import { CountryDeleteComponent } from './delete-country/delete-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryService } from './country.service';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [CountryCreateComponent, CountryDeleteComponent, CountryListComponent],
  imports: [
    CommonModule,
    HttpModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo:"main", pathMatch:'full'},
      { path: "delete", component: CountryDeleteComponent }
    ])
  ],
  providers:[CountryService]

})
export class CountriesModule { }
