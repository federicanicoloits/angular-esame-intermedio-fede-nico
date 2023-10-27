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

    constructor(
        private http: HttpClient,
        private drinkService: DrinkService,
        private activatedRoute: ActivatedRoute
    ) {}

    lettera: string = "";

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.lettera = params["lettera"];
            this.drinkService
                .getElencoDrinks(this.lettera)
                .subscribe((dati) => {
                    if (dati.drinks !== null) this.drinks = dati.drinks;
                });
        });
    }
}
