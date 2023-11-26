import {Observable} from "rxjs";
import {ClientService} from "../client.service";
import {Client} from "../client";
import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.css"]
})
export class ClientListComponent implements OnInit {
  clients: Observable<Client[]>;

  constructor(private clientService: ClientService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clients = this.clientService.getClientsList();
  }

  deleteClient(id: string) {
    this.clientService.deleteClient(id)
      .subscribe(
        data => {
          this.toastr.success('Client deleted', 'OK!');
          this.reloadData();
        },
        error => this.toastr.error(error.error.error, 'Error!'));
  }

  clientDetails(id: number) {
    this.router.navigate(['client/details', id]).then(() => {
      window.location.reload();
    });
  }

  updateClient(id: number) {
    this.router.navigate(['client/update', id]).then(() => {
      window.location.reload();
    });
  }
}
