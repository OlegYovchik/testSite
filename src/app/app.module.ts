import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseDataComponent } from './base-data/base-data.component';
import { ScoolService } from './profile/scool.service';
import { CourseService } from './courses/course-service.service';
import { CountryService } from './base-data/country.service';
import { LogInComponent } from './log-in/log-in.component';
import { FormsComponent } from './forms/forms.component';
import { CountryCreateComponent } from './base-data/country-create/country-create.component';
import { CountryDeleteComponent } from './base-data/delete-country/delete-country.component';
import { CountryListComponent } from './base-data/country-list/country-list.component';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ProfileComponent, MainComponent, CoursesComponent, BaseDataComponent, LogInComponent, FormsComponent, CountryCreateComponent, CountryDeleteComponent, CountryListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo:"main", pathMatch:'full'},
      { path: "main", component: MainComponent },
      { path: "profile", component: ProfileComponent },
      { path: "courses", component: CoursesComponent},
      { path: "forms", component: FormsComponent},
      { path: "baseData", component: BaseDataComponent, 
        children: [
          { path: "", redirectTo: "countries", pathMatch: "full"},
          { path: "countries", component: CountryListComponent },
          { path: "countries/edit/:id", component: CountryCreateComponent},
          { path: "countries/create", component: CountryCreateComponent},
          { path: "countries/delete/:id", component: CountryDeleteComponent},
          { path: "logIn", component: LogInComponent}
        ]
      }
    ])
  ],
  providers: [ScoolService, CourseService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
