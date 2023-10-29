import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Injectable()
export class NavigationService {
    constructor(private router: Router, private titleService: Title) {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                const url = event.urlAfterRedirects;

                if (url.includes("/home/drinks/")) {
                    const id = url.split("/").pop();
                    this.titleService.setTitle(`Drink n. ${id}`);
                } else if (url.includes("/home/letters/")) {
                    const lettera = url.split("/").pop();
                    this.titleService.setTitle(`Letter ${lettera}`);
                } else if (url === "/home/error") {
                    this.titleService.setTitle("404");
                } else {
                    this.titleService.setTitle("Home");
                }
            }
        });
    }
}
