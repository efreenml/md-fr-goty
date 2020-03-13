import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { GotyComponent } from "./pages/goty/goty.component";
import { ComponentsModule } from "./components/components.module";

import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, InicioComponent, GotyComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
