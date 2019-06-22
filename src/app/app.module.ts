import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { CustomersComponent } from "./customers/customers.component";
import { CustomerComponent } from "./customers/customer/customer.component";
import { CustomerService } from "./shared/customer.service";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { CustomersListComponent } from "./customers/customers-list/customers-list.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    CustomersListComponent
  ],
  entryComponents: [CustomerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
