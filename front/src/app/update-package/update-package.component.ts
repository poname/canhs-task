import {Component, OnInit} from '@angular/core';
import {Package} from '../package';
import {ActivatedRoute, Router} from '@angular/router';
import {PackageService} from '../package.service';
import {Client} from "../client";
import {ClientService} from "../client.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-package',
  templateUrl: './update-package.component.html',
  styleUrls: ['./update-package.component.css']
})
export class UpdatePackageComponent implements OnInit {

  id: string;
  package: Package;
  clients: Client[];
  reactiveForm: FormGroup;
  ready: boolean;

  constructor(private route: ActivatedRoute,
              private clientService: ClientService,
              private router: Router,
              private packageService: PackageService,
              private toastr: ToastrService,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    this.ready = false;
    this.reactiveForm = this.builder.group({
      name: [null, Validators.required],
      id: [null, Validators.required],
      client: [null, Validators.required],
    });

    this.reloadData();
    this.package = new Package();

    this.id = this.route.snapshot.params['id'];

    this.packageService.getPackage(this.id)
      .subscribe(data => {
        console.log(data)
        this.package = data;
        this.ready = true;
      }, error => console.log(error));
  }

  reloadData() {
    this.clientService.getClientsList().subscribe((clients) => {
      this.clients = clients;
    });
  }

  updatePackage() {
    this.packageService.updatePackage(this.id, this.package)
      .subscribe(data => this.toastr.success('Package Updated', 'OK!'), error => this.toastr.error(error.error.error, 'Error!'));
    this.package = new Package();
    this.gotoList();
  }

  onSubmit() {
    this.updatePackage();
  }

  gotoList() {
    this.router.navigate(['/packages']).then(() => {
      window.location.reload();
    });
  }
}
