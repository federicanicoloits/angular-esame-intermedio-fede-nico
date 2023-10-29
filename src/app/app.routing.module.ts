import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CardDetail } from "./card-detail/card-detail.component";
import { ElencoLettera } from "./elenco-lettera/elenco-lettera.component";
import { Page404 } from "./page-404/page-404";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "home/drinks/:id", component: CardDetail },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home/letters/:lettera", component: ElencoLettera },
    {
        path: "home/letters/:lettera/drinks/:id",
        redirectTo: "home/drinks/:id",
        pathMatch: "full",
    },
    { path: "home/error", component: Page404 },
    { path: "**", redirectTo: "home/error", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
