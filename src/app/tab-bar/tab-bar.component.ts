import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class TabBarComponent implements OnInit {

  caselistClicked:boolean = false;
  casedetailClicked:boolean = false;
  mediareviewClicked:boolean = false;
  captureClicked:boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {}

  
  caselist(){
    this.caselistClicked = true;
    this.casedetailClicked = false;
    this.mediareviewClicked = false;
    this.captureClicked = false;
    this.router.navigate(['tabs/case-list']);
  }

  casedetail(){
    this.caselistClicked = false;
    this.casedetailClicked = true;
    this.mediareviewClicked = false;
    this.captureClicked = false;
    this.router.navigate(['tabs/case-details']);
  }

  mediareview(){
    this.caselistClicked = false;
    this.casedetailClicked = false;
    this.mediareviewClicked = true;
    this.captureClicked = false;
    this.router.navigate(['tabs/media-review']);
  }

  capture(){
    this.caselistClicked = false;
    this.casedetailClicked = false;
    this.mediareviewClicked = false;
    this.captureClicked = true;
    this.router.navigate(['tabs/capture']);
  }
}
