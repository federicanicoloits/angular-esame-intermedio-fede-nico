import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Drink } from "../drink.interface";
import { Property } from "../property-drink.interface";
import { ActivatedRoute, Router } from "@angular/router";
import { DrinkService } from "../_services/drink.service";

@Component({
    selector: "app-card-detail",
    templateUrl: "./card-detail.component.html",
})
export class CardDetail implements OnInit {
    drink!: Drink;
    properties: Property[] = [];
    selectPill = {
        en: "en",
        es: "es",
        de: "de",
        fr: "fr",
        it: "it",
    };

    idDrink: string = "";

    selectedPill: string = this.selectPill.en;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private drinkService: DrinkService
    ) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.idDrink = params["id"];
            this.drinkService
                .getDettaglioDrink(this.idDrink)
                .subscribe((dati) => {
                    if (dati && dati.drinks !== null) {
                        this.drink = dati.drinks[0];
                        for (let index = 1; index <= 15; index++) {
                            const ingredientKey = "strIngredient" + index;
                            const measuresKey = "strMeasure" + index;
                            if ((this.drink as any)[ingredientKey] !== null) {
                                const property: Property = {
                                    ingredients: (this.drink as any)[
                                        ingredientKey
                                    ],
                                    measures: (this.drink as any)[measuresKey],
                                    imgUrl:
                                        "https://www.thecocktaildb.com/images/ingredients/" +
                                        (this.drink as any)[ingredientKey] +
                                        ".png",
                                };
                                this.properties.push(property);
                            }
                        }
                    } else {
                        this.router.navigate(["/error"]);
                    }
                });
        });
    }

    selectPillFunction(scelta: string) {
        switch (scelta) {
            case this.selectPill.en:
                this.selectedPill = this.selectPill.en;
                break;
            case this.selectPill.de:
                this.selectedPill = this.selectPill.de;
                break;
            case this.selectPill.es:
                this.selectedPill = this.selectPill.es;
                break;
            case this.selectPill.fr:
                this.selectedPill = this.selectPill.fr;
                break;
            case this.selectPill.it:
                this.selectedPill = this.selectPill.it;
                break;
        }
    }
}
