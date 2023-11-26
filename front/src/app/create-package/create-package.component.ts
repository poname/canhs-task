import {PackageService} from '../package.service';
import {Package} from '../package';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Client} from "../client";
import {ClientService} from "../client.service";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {

  pack: Package = new Package();
  submitted = false;
  clientId: string = "";
  clients: Client[];
  selectedClient: Client;
  reactiveForm: FormGroup;

  constructor(private packageService: PackageService,
              private clientService: ClientService,
              private router: Router,
              private toastr: ToastrService,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    this.reactiveForm = this.builder.group({
      name: [null, Validators.required],
      client: [null, Validators.required],
    });
    this.reloadData();
  }

  reloadData() {
    this.clientService.getClientsList().subscribe((clients) => {
      this.clients = clients;
    });
  }

  newPackage(): void {
    this.submitted = false;
    this.pack = new Package();
    this.clientId = "";
  }

  save() {
    this.packageService.createPackage(this.selectedClient.id, this.pack)
      .subscribe(data => this.toastr.success('Package Created', 'OK!'), error => this.toastr.error(error.error.error, 'Error!'));
    this.pack = new Package();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/packages']).then(() => {
      window.location.reload();
    });
  }
}
