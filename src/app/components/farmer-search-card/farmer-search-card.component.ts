import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/model/Farmer';
import { FarmersearchService } from 'src/app/services/farmersearch.service'
//import { FarmerSearchAbstractProvider, SearchParams } from 'src/app/providers/FarmerSearchAbstractProvider'

@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent implements OnInit {
  farmer = {}

  constructor(private service: FarmersearchService) { }

  ngOnInit() {
  }

  searchFarmers() {
  }

}
