import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCardSubtitle
        , IonCardTitle, IonCardHeader, IonCard, IonItem, IonList, IonBackButton
        , IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.page.html',
  styleUrls: ['./case-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
            IonCardContent, IonCardSubtitle,IonCardTitle, IonCardHeader, IonCard, IonItem, IonList,
            IonBackButton, IonButtons, IonButton, IonIcon]
})
export class CaseListPage implements OnInit {

  cases = [
    {
      name: 'Sarah Smith',
      status: 'In Progress',
      mrn: '0114151',
      dateTime: '01/02/22 05:24',
      examiner: 'Holly Jacobs'
    },
    {
      name: 'Jane Mary Simmons',
      status: 'Archived',
      mrn: '0144187',
      dateTime: '01/02/22 10:58',
      examiner: 'Holly Jacobs'
    },
    {
      name: 'Thomas Andersson',
      status: 'Exam Complete',
      mrn: '0284187',
      dateTime: '01/03/22 07:22',
      examiner: 'Holly Jacobs'
    }
  ];

  constructor() { }

  ngOnInit() { }

  getStatusClass(status: string) {
    switch (status) {
      case 'In Progress':
        return 'in-progress';
      case 'Archived':
        return 'archived';
      case 'Exam Complete':
        return 'exam-complete';
      default:
        return '';
    }
  }
}
