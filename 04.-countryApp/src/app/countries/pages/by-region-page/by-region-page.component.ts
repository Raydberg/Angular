import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selecterRegion?: Region;
  constructor(private countriesService: CountriesService) {}
  public countries: Country[] = [];
  searchByRegion(region: Region) {
    this.selecterRegion = region;
    this.countriesService
      .searchRegion(region)
      .subscribe((region) => (this.countries = region));
  }
}
