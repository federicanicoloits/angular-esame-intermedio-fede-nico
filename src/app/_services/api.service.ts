import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Drinks } from "../drinks.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";
    constructor(private http: HttpClient) {}

    /***
     * RICERCA
     */
    searchByFirstLetter(firstLetter: string) {
        return this.http.get<Drinks>(
            this.baseUrl + "search.php?f=" + firstLetter
        );
    }

    searchById(id: string) {
        return this.http.get<Drinks>(this.baseUrl + "lookup.php?i=" + id);
    }
    searchByName(name: string) {
        return this.http.get<Drinks>(this.baseUrl + "search.php?s=" + name);
    }
}
