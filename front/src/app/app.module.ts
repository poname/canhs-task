import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientListComponent } from './client-list/client-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateClientComponent } from './update-client/update-client.component';
import {PackageListComponent} from "./package-list/package-list.component";
import {CreatePackageComponent} from "./create-package/create-package.component";
import {PackageDetailsComponent} from "./package-details/package-details.component";
import {UpdatePackageComponent} from "./update-package/update-package.component";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    ClientDetailsComponent,
    ClientListComponent,
    UpdateClientComponent,
    CreatePackageComponent,
    PackageDetailsComponent,
    PackageListComponent,
    UpdatePackageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
