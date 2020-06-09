import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, ControlValueAccessor, NgControl, Validators, FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Farmer } from 'src/app/model/Farmer';
import { FarmersearchService } from 'src/app/services/farmersearch.service'
import { FarmerSearchAbstractProvider, SearchParams } from 'src/app/providers/FarmerSearchAbstractProvider'

@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent implements OnInit {

  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
   
  nameOrDoc = new FormControl('', Validators.required)
  name = new FormControl()
  
  selectedFarmer: Farmer

  constructor() { }

  ngOnInit() {
  }

  searchFarmers() {
    var searchParams = {nameOrDoc: this.nameOrDoc.value} as SearchParams
    this.farmerSearchAbstractProvider.searchFarmers(searchParams)
    .then(farmers => {
      this.selectedFarmer = farmers[0]
      this.name.setValue(this.selectedFarmer.name)
    }).catch( error =>  {
      console.log(error)
    })
  }

  onFarmerSelectedEvent() {

  }

}