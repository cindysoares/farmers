import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ControlValueAccessor, NgControl, Validators, FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Farmer } from 'src/app/model/Farmer';
import { FarmersearchService } from 'src/app/services/farmersearch.service'
//import { FarmerSearchAbstractProvider, SearchParams } from 'src/app/providers/FarmerSearchAbstractProvider'

@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent implements OnInit {
   
  nameOrDoc = new FormControl('', Validators.required);

  farmer: Farmer

  constructor(private service: FarmersearchService) { }

  ngOnInit() {
  }

  searchFarmers() {
    this.service.searchFarmers(this.nameOrDoc.value)
    .subscribe(data => {
      this.farmer = data[0]
    }, error =>  {
      console.log(error)
    })
  }

  onFarmerSelectedEvent() {

  }

}
