import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public menuItems: MenuItem[] | undefined;
  constructor(private router: Router) {}
  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texto y fechas',
            icon: 'pi pi-align-left',
            command:()=>{
              this.router.navigate([''])
            }
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            command: () => {
              this.router.navigate(['/numbers'])
            },
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            command:()=>{
              this.router.navigate(['/uncommon'])
            }
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: ' pi pi-cog',
          },
        ],
      },
    ];
  }
}
