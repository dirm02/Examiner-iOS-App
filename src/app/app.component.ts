import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CaseService } from './service/case.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private caseService: CaseService) {
    this.initDatabase();
  }
  
  async initDatabase(){
    await this.caseService.initializeDatabase();

  }
}
