import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  constructor(private countriesService: CountriesService) {}
  public countries: Country[] = [];
  searchByCapital(term: string) {
    this.countriesService.searchCapital(term).subscribe((country) => {
      this.countries = country;
    });
  }
}
