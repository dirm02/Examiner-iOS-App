import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonRow, IonGrid, IonBackButton,
        IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-media-review',
  templateUrl: './media-review.page.html',
  styleUrls: ['./media-review.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
            IonCol, IonRow, IonGrid, IonBackButton, IonButtons]
})
export class MediaReviewPage implements OnInit {

  galleryItems: Array<{ src: string }>;

  constructor() {
    this.galleryItems = [
      { src: 'assets/Screenshot_4.png' },
      { src: 'assets/Screenshot_4.png' },
      { src: 'assets/Screenshot_4.png' },
      { src: 'assets/Screenshot_4.png' }
    ];
  }

  ngOnInit() {}

}
