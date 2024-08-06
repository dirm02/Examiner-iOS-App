import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class TabBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
