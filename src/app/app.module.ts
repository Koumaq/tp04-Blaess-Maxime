import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { CartState } from './cart.state';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HeaderComponent,
    CartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([CartState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
