import { Component, OnInit } from "@angular/core";
import { Drink } from "../drink.interface";
import { DrinkService } from "../_services/drink.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    drinksA: Drink[] = [];
    drinksBZ19: Drink[] = [];
    buttonCaricaDiPiu: boolean = false;
    lettersAndNumbers: string[] = [];
    drinksFiltrati: Drink[] | null = null;
    booleanCaricaRicerca: boolean = false;
    funziona: boolean = true;

    constructor(private drinkService: DrinkService) {}

    ngOnInit() {
        for (let i = 97; i <= 122; i++) {
            const letterAndNumber = String.fromCharCode(i);
            this.lettersAndNumbers.push(letterAndNumber);
        }
        for (let i = 1; i <= 9; i++) {
            const letterAndNumber = i.toString();
            this.lettersAndNumbers.push(letterAndNumber);
        }

        for (const letterAndNumber of this.lettersAndNumbers) {
            this.drinkService
                .getElencoDrinks(letterAndNumber)
                .subscribe((response) => {
                    if (response !== undefined) {
                        if (letterAndNumber === "a") {
                            if (response.drinks !== null)
                                this.drinksA = response.drinks;
                        } else {
                            if (response.drinks !== null)
                                this.drinksBZ19 = this.drinksBZ19.concat(
                                    response.drinks
                                );
                        }
                    }
                });
        }
    }

    RicercaDrink = () => {
        this.booleanCaricaRicerca = true;
        const input = document.getElementById(
            "input-ricerca-drink"
        ) as HTMLInputElement;
        if (input) {
            const valore = input.value;
            this.drinkService.getRicercaDrink(valore).subscribe((response) => {
                if (response !== null) {
                    console.log(valore);
                    this.drinksFiltrati = response.drinks;
                }
            });
        }
    };

    RicercaIngrediente = () => {
        const input = document.getElementById(
            "input-ricerca-ingrediente"
        ) as HTMLInputElement;
        if (input) {
            const valore = input.value;
            if (valore !== "") {
                this.booleanCaricaRicerca = true;
                this.drinkService
                    .getRicercaIngrediente(valore)
                    .subscribe((response) => {
                        if (response !== null) {
                            this.funziona = true;
                            this.drinksFiltrati = response.drinks;
                        } else {
                            this.funziona = false;
                        }
                    });
            } else {
                this.booleanCaricaRicerca = false;
            }
        }
    };
}
