import { Component, OnInit } from '@angular/core';
import { OfferComponent } from './offer/offer.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  offersList: Array<OfferComponent>;
  selectedTab = new FormControl(0);

  ngOnInit() {
    this.offersList = new Array<OfferComponent>();
  }

  getNewOffer($offerEvent) {
    $offerEvent.Id = Math.floor((Math.random() * 1000) + 100);
    this.offersList.push($offerEvent);
    console.log(this.offersList);
    this.selectedTab.setValue(1);
  }
}
