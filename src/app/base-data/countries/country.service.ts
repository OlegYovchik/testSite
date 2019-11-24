import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Country } from "./country";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CountryService {
    // адрес сервиса
    private url = "http://localhost:2403/countries";

    constructor(private http: Http) { }

    // Отправка GET запроса нв сервер
    public getCountries(): Observable<Country[]> {
        let countries = this.http.get(this.url)
            .map(this.extractCountries) // преобразовывает ответ в массив экземпляров Product.
            .catch(this.handleError);
        return countries;

    }

    public getCountry(id: string): Observable<Country> {
        let country = this.http.get(this.url + "/" + id)
            .map(this.extractCountry) // преобразовывает ответ в экземпляр Product.
            .catch(this.handleError);
        return country;
    }

    // Отправка POST запроса на сервер, добавление нового продукта в базу.
    public addCountry(country: Country) {
        return this.http.post(this.url, country)
            .catch(this.handleError);
    }

    // Отправка PUT запроса и обновление продукта в базе.
    public updateCountry(country: Country) {
        return this.http.put(this.url + "/" + country.id, country)
            .catch(this.handleError);
    }

    // Отправка DELETE запроса и удаление продукта из базы.
    public deleteCountry(country: Country) {
        return this.http.delete(this.url + "/" + country.id)
            .catch(this.handleError);
    }

    private extractCountries(response: Response) {
        let res = response.json();
        let countries: Country[] = [];
        for (let i = 0; i < res.length; i++) {
            countries.push(new Country(res[i].id, res[i].name, res[i].capital));
        }
        return countries;
    }

    private extractCountry(response: Response) {
        let res = response.json();
        let country = new Country(res.id, res.name, res.capital);
        return country;
    }

    private handleError(error: any, cought: Observable<any>): any {
        let message = "";

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }

        console.error(message);

        return Observable.throw(message);
    }
}

