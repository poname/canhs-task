import {ClientDetailsComponent} from './client-details/client-details.component';
import {CreateClientComponent} from './create-client/create-client.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientListComponent} from './client-list/client-list.component';
import {UpdateClientComponent} from './update-client/update-client.component';
import {PackageListComponent} from "./package-list/package-list.component";
import {CreatePackageComponent} from "./create-package/create-package.component";
import {UpdatePackageComponent} from "./update-package/update-package.component";
import {PackageDetailsComponent} from "./package-details/package-details.component";

const routes: Routes = [
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path: 'clients', component: ClientListComponent},
  {path: 'client/add', component: CreateClientComponent},
  {path: 'client/update/:id', component: UpdateClientComponent},
  {path: 'client/details/:id', component: ClientDetailsComponent},
  {path: 'packages', component: PackageListComponent},
  {path: 'package/add', component: CreatePackageComponent},
  {path: 'package/update/:id', component: UpdatePackageComponent},
  {path: 'package/details/:id', component: PackageDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
