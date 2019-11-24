import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Country } from './../country';
import { CountryService } from "./../country.service";

@Component({
    selector: "country-create",
    templateUrl: "country-create.component.html",
    styleUrls: ["country-create.component.css"]
})
export class CountryCreateComponent implements OnInit {
    errorMessage: string;
    countryForm: FormGroup;
    currentCountry: Country;

    constructor(private service: CountryService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.buildForm();
        this.getCountryFromRoute();
    }

    public checkError(element: string, errorType: string) {
        return this.countryForm.get(element).hasError(errorType) &&
            this.countryForm.get(element).touched
    }

    public onSubmit(countryForm: FormGroup) {
        this.currentCountry.name = countryForm.value.name;
        this.currentCountry.capital = countryForm.value.capital;


        if (this.currentCountry.id) {
            this.service.updateCountry(this.currentCountry)
                .subscribe(
                () => this.goBack(),
                error => this.errorMessage = error
                );
        } else {
            this.service.addCountry(this.currentCountry)
                .subscribe(
                () => this.goBack(),
                error => this.errorMessage = error
                );
        }
    }

    public goBack() {
        this.router.navigate(["/countries"]);
    }

    private getCountryFromRoute() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = params["id"];

            if (id) {
                this.service.getCountry(id).subscribe(
                    country => {
                        this.currentCountry = country;
                        this.countryForm.patchValue(this.currentCountry);
                    },
                    error => this.errorMessage = error
                );
            }
            else {
                this.currentCountry = new Country(null, null, null);
                this.countryForm.patchValue(this.currentCountry);
            }
        });
    }

    private buildForm() {
        this.countryForm = this.fb.group({
            name: ["", Validators.required],
            price: ["", Validators.required]
        });
    }
}