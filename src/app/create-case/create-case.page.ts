import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput,
        IonLabel, IonItem, IonList, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.page.html',
  styleUrls: ['./create-case.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton, IonInput,
            IonLabel, IonItem, IonList, IonBackButton, IonButtons]
})
export class CreateCasePage implements OnInit {

  newCase = {
    firstName: '',
    lastName: '',
    mrn: '',
    examiner: '',
    location: ''
  };

  constructor(private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    console.log('Case created:', this.newCase);
    // You can add your logic here to save the case
    this.router.navigate(['/case-list']);
  }
  
  saveCase() {
    this.router.navigate(['tabs/capture']);
    // Implement the logic to save the case
    // this.caseService.saveCase(this.newCase).subscribe(
    //   response => {
    //     console.log('Case saved successfully:', response);
    //     // Navigate to the Capture page
    //     this.router.navigate(['/capture']);
    //   },
    //   error => {
    //     console.error('Error saving case:', error);
    //   }
    // );
  }
}
