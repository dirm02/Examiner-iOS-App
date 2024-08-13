import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCardSubtitle
        , IonCardTitle, IonCardHeader, IonCard, IonItem, IonList, IonBackButton
        , IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { CaseService } from '../service/case.service';

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

  cases: any = [];

  constructor(private caseService: CaseService) { 
  }

  ngOnInit() {
    this.loadCases();
  }

  async loadCases() {
    this.cases = await this.caseService.getCases();
  }

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
