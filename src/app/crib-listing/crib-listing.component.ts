import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CribsService} from '../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})



export class CribListingComponent implements OnInit {

  cribs: Array<any>;


  constructor(
      private http: Http,
      private cribService: CribsService
  ) { }

  ngOnInit() {

    this.cribService.getAllCribs()
        .subscribe(
            data => this.cribs = data

        );
    this.cribService.newCribSubject.subscribe(
        data => this.cribs = [data, ...this.cribs]
    );
  }

}
