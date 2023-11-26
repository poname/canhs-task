import {Observable} from "rxjs";
import {PackageService} from "../package.service";
import {Package} from "../package";
import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: "app-package-list",
  templateUrl: "./package-list.component.html",
  styleUrls: ["./package-list.component.css"]
})
export class PackageListComponent implements OnInit {
  packages: Observable<Package[]>;

  constructor(private packageService: PackageService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.packages = this.packageService.getPackagesList();
  }

  deletePackage(id: string) {
    this.packageService.deletePackage(id)
      .subscribe(
        data => {
          this.toastr.success('Package deleted', 'OK!');
          this.reloadData();
        },
        error => this.toastr.error(error.error.error, 'Error!'));
  }

  packageDetails(id: string) {
    this.router.navigate(['package/details', id]).then(() => {
      window.location.reload();
    });
  }

  updatePackage(id: string) {
    this.router.navigate(['package/update', id]).then(() => {
      window.location.reload();
    });
  }
}
