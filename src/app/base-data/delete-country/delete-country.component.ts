import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Country } from './../country';
import { CountryService } from "./../country.service";

@Component({
    selector: "country-delete",
    templateUrl: "delete-country.component.html",
    styleUrls: ["delete-country.component.css"]
})
export class CountryDeleteComponent implements OnInit {

    currentCountry: Country;
    errorMessage: string;

    constructor(private activatedRoute: ActivatedRoute,
        private router: Router,
        private service: CountryService) { }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.params["id"];
        if (id) {
            this.service.getCountry(id)
                .subscribe(
                country => this.currentCountry = country,
                error => this.errorMessage = error
                );
        }
    }

    deleteCountry() {
        this.service.deleteCountry(this.currentCountry)
            .subscribe(
            () => this.goBack(),
            error => this.errorMessage = error
            );
    }

    goBack() {
        this.router.navigate(["baseData/countries"]);
    }

}