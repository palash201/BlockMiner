import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PickaxeComponent } from './pickaxe/pickaxe.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { BuyButtonComponent } from './buy-button/buy-button.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { TitleComponent } from './title/title.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { LabComponent } from './lab/lab.component';
import { RomanPipe } from './roman.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    PickaxeComponent,
    BuildingsComponent,
    BuyButtonComponent,
    ShortNumberPipe,
    TitleComponent,
    BottomBarComponent,
    LabComponent,
    RomanPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
