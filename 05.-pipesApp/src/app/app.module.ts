import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Configuracion del locale de la app
import localEsPE from '@angular/common/locales/es-PE';
import localFrCA from '@angular/common/locales/fr-CA';
import localEsUS from '@angular/common/locales/es-US';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsPE);
registerLocaleData(localFrCA);
registerLocaleData(localEsUS);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-PE',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
