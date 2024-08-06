import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton,
          IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { TabBarComponent } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.page.html',
  styleUrls: ['./capture.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButton,
            IonButtons, IonBackButton, TabBarComponent]
})
export class CapturePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
