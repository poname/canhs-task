import {ClientService} from '../client.service';
import {Client} from '../client';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  client: Client = new Client();
  submitted = false;
  reactiveForm: FormGroup;

  constructor(private clientService: ClientService,
              private router: Router,
              private toastr: ToastrService,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    this.reactiveForm = this.builder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
    });
  }

  newClient(): void {
    this.submitted = false;
    this.client = new Client();
  }

  save() {
    this.clientService.createClient(this.client)
      .subscribe(data => this.toastr.success('Client created', 'OK!'), error => this.toastr.error(error.error.error, 'Error!'));
    this.client = new Client();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/clients']).then(() => {
      window.location.reload();
    });
  }
}
