import { Component, OnInit } from "@angular/core";
import { Drink } from "../drink.interface";
import { DrinkService } from "../_services/drink.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    drinksA: Drink[] = [];
    drinksBZ: Drink[] = [];
    buttonCaricaDiPiu: boolean = false;
    letters: string[] = [];
    drinksFiltrati: Drink[] | null = null;
    booleanCaricaRicerca: boolean = false;

    constructor(private drinkService: DrinkService) {}

    ngOnInit() {
        for (let i = 97; i <= 122; i++) {
            const letter = String.fromCharCode(i);
            this.letters.push(letter);
        }

        for (const letter of this.letters) {
            this.drinkService.getElencoDrinks(letter).subscribe((response) => {
                if (response !== undefined) {
                    if (letter === "a") {
                        if (response.drinks !== null)
                            this.drinksA = response.drinks;
                    } else {
                        if (response.drinks !== null)
                            this.drinksBZ = this.drinksBZ.concat(
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
            "input-ricerca"
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
}
