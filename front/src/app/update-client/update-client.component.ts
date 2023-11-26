import {Component, OnInit} from '@angular/core';
import {Client} from '../client';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../client.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id: string;
  client: Client;
  reactiveForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService,
              private toastr: ToastrService,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    this.reactiveForm = this.builder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      id: [null, Validators.required]
    });

    this.client = new Client();

    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
  }

  updateClient() {
    this.clientService.updateClient(this.id, this.client)
      .subscribe(data => this.toastr.success('Client Updated', 'OK!'), error => this.toastr.error(error.error.error, 'Error!'));
    this.client = new Client();
    this.gotoList();
  }

  onSubmit() {
    this.updateClient();
  }

  gotoList() {
    this.router.navigate(['/clients']).then(() => {
      window.location.reload();
    });
  }
}
