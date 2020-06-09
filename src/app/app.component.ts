import { Component } from '@angular/core';
import { FarmersearchService } from './services/farmersearch.service';
import { FarmerSearchAbstractProvider } from './providers/FarmerSearchAbstractProvider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farmers';
  myFarmerSearchProvider: FarmerSearchAbstractProvider

  constructor(private service: FarmersearchService) {
    this.myFarmerSearchProvider = service
  }
}
