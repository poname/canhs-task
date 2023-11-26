import {Client} from '../client';
import {Component, OnInit} from '@angular/core';
import {ClientService} from '../client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Package} from "../package";
import {PackageService} from "../package.service";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: string;
  client: Client;
  packages: Package[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService,
              private packageService: PackageService) {
  }

  ngOnInit() {
    this.client = new Client();
    this.packages = [];

    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));

    this.packageService.getPackagesListOfClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.packages = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['clients']).then(() => {
      window.location.reload();
    });
  }
}
