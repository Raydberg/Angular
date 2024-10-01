import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [HeroComponent, ],
  exports: [HeroComponent, ],
  imports: [CommonModule],
})
export class HeroesModule {}
