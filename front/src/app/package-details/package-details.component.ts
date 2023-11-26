import {Package} from '../package';
import {Component, OnInit} from '@angular/core';
import {PackageService} from '../package.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {

  id: string;
  pack: Package;

  constructor(private route: ActivatedRoute, private router: Router,
              private packageService: PackageService) {
  }

  ngOnInit() {
    this.pack = new Package();

    this.id = this.route.snapshot.params['id'];

    this.packageService.getPackage(this.id)
      .subscribe(data => {
        console.log(data)
        this.pack = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['packages']).then(() => {
      window.location.reload();
    });
  }
}
