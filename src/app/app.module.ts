import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y'
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { MatIconModule, MatButtonModule, MatChipsModule, MatSliderModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    CommonModule,
    A11yModule,
    MatIconModule, MatButtonModule, MatChipsModule, MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
