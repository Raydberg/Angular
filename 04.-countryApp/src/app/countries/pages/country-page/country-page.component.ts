import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchContryByAlphaCode(id))
      )
      .subscribe((country) => {
        if (!country) return this.router.navigateByUrl('');
        return;
      });
  }
}
