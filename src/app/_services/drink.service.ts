import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Drinks } from "../drinks.interface";

@Injectable({
    providedIn: "root",
})
export class DrinkService {
    constructor(private apiService: ApiService) {}

    getElencoDrinks(letter: string) {
        return this.apiService.searchByFirstLetter(letter);
    }
    getDettaglioDrink(id: string) {
        return this.apiService.searchById(id);
    }
    getRicercaDrink(name: string) {
        return this.apiService.searchByName(name);
    }
    getRicercaIngrediente(name: string) {
        return this.apiService.searchByIngredient(name);
    }
}
