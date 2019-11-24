import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CountryService } from './../country.service';
import { Country } from "./../country";

@Component({
    selector: "country-list",
    templateUrl: "country-list.component.html",
    styleUrls: ["country-list.component.css"]
})
export class CountryListComponent implements OnInit {
    countries: Country[];
    errorMessage: string;

    constructor(private service: CountryService,
        private router: Router) { }

    ngOnInit() {
        this.getCountries();
    }

    public refresh() {
        this.getCountries();
    }

    public editCountry(country: Country) {
        this.router.navigate(["countries", "edit", country.id]);
    }

    public deleteCountry(country: Country) {
        this.router.navigate(["baseData/countries", "delete", country.id]);
    }

    public createCountry() {
        this.router.navigate(["countries", "create"]);
    }

    private getCountries() {
        this.service.getCountries().subscribe(
            countries => this.countries = countries,
            error => this.errorMessage = error
        );
    }
}