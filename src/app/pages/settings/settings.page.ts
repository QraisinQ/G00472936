import { Component } from '@angular/core';
import {
  IonContent,
  IonButton,
  IonRadioGroup,
  IonRadio,
} from '@ionic/angular/standalone';
import { LocalService } from 'src/app/services/local-service';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from 'src/app/components/app-header/app-header.component';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [
    IonContent,
    IonButton,
    RouterModule,
    IonRadioGroup,
    IonRadio,
    AppHeaderComponent,
  ],
})
export class SettingsPage {
  private MEASURE = 'MEAS';
  measure: string = 'metric';
  constructor(private localService: LocalService) {}

  ionViewWillEnter() {
    this.measure =
      this.localService.getElement(this.MEASURE) === 'us' ? 'us' : 'metric';
  }

  onChange(event: any) {
    this.measure = event.detail.value;
    this.localService.setElement(this.MEASURE, this.measure);
  }
}
