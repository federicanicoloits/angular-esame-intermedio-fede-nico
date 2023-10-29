import { Component, OnInit } from "@angular/core";
import { NavigationService } from "./_services/navigation.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
    constructor(private navigationService: NavigationService) {}

    ngOnInit(): void {}
}
