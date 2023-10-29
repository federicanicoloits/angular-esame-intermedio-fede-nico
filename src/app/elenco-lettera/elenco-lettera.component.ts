import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Drink } from "../drink.interface";
import { Drinks } from "../drinks.interface";
import { DrinkService } from "../_services/drink.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "elenco-lettera",
    templateUrl: "./elenco-lettera.component.html",
})
export class ElencoLettera implements OnInit {
    drinks: Drink[] = [];
    lettera: string = "";
    drinksAlchol: Drink[] = [];
    drinksAnalchol: Drink[] = [];
    selectFilter = {
        tutti: "tutti",
        alcolici: "alcolici",
        analcolici: "analcolici",
    };
    selectedFilter: string = this.selectFilter.tutti;
    esisteLettera: boolean = true;

    constructor(
        private http: HttpClient,
        private drinkService: DrinkService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.lettera = params["lettera"];
            this.drinkService
                .getElencoDrinks(this.lettera)
                .subscribe((response) => {
                    if (response && response.drinks !== null) {
                        this.drinks = response.drinks;
                        for (let i = 0; i < this.drinks.length; i++) {
                            if (this.drinks[i].strAlcoholic === "Alcoholic") {
                                this.drinksAlchol.push(response.drinks[i]);
                            } else if (
                                this.drinks[i].strAlcoholic === "Non alcoholic"
                            ) {
                                this.drinksAnalchol.push(response.drinks[i]);
                            }
                        }
                    } else {
                        this.esisteLettera = false;
                    }
                });
        });
    }

    selectFilterFunction(scelta: string) {
        switch (scelta) {
            case this.selectFilter.tutti:
                this.selectedFilter = this.selectFilter.tutti;
                break;
            case this.selectFilter.alcolici:
                this.selectedFilter = this.selectFilter.alcolici;
                break;
            case this.selectFilter.analcolici:
                this.selectedFilter = this.selectFilter.analcolici;
                break;
        }
    }
}
