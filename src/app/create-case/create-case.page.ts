import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput,
        IonLabel, IonItem, IonList, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CaseService } from '../service/case.service';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.page.html',
  styleUrls: ['./create-case.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton, IonInput,
            IonLabel, IonItem, IonList, IonBackButton, IonButtons]
})
export class CreateCasePage implements OnInit {
  newCase: any = {};

  constructor(private router: Router, private caseService: CaseService) { }  

  ngOnInit() { }

  onSubmit() {
    this.saveCase();
  }

  saveCase() {
    this.router.navigate(['tabs/capture']);

    this.caseService.saveCase(this.newCase);
    // Optionally, you can navigate back or show a confirmation message here
    console.log('Case saved:', this.newCase);
  }
}
