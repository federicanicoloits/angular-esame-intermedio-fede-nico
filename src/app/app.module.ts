import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app.routing.module";
import { CardDetail } from "./card-detail/card-detail.component";
import { ElencoLettera } from "./elenco-lettera/elenco-lettera.component";
import { ApiService } from "./_services/api.service";
import { DrinkService } from "./_services/drink.service";
import { Page404 } from "./page-404/page-404";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CardDetail,
        ElencoLettera,
        Page404,
    ],
    bootstrap: [AppComponent],
    providers: [ApiService, DrinkService],
})
export class AppModule {}
