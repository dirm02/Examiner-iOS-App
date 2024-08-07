import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonBackButton,
        IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.page.html',
  styleUrls: ['./case-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
            IonButton, IonIcon, IonBackButton, IonButtons]
})
export class CaseDetailsPage implements OnInit {

  caseDetails = {
    id: 'CaseAndroidTest-102822-35',
    patientName: 'Sarah Smith',
    mrn: '0114151',
    status: 'In Progress',
    dateTime: '01/02/22 05:24',
    examiner: 'Holly Jacobs',
    location: 'USC Medical Center, Los Angeles, CA',
    images: [
      'assets/Screenshot_4.png',
      'assets/Screenshot_4.png',
      'assets/Screenshot_4.png',
      'assets/Screenshot_4.png',
    ],
    videos: 1
  };

  constructor() {}

  ngOnInit() {}

  deleteCase() {
    // Implement delete logic here
    console.log('Case deleted');
  }

  completeCase() {
    // Implement complete logic here
    console.log('Case completed');
  }

}
