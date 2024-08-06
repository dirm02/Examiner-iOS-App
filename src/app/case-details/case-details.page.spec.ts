import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseDetailsPage } from './case-details.page';

describe('CaseDetailsPage', () => {
  let component: CaseDetailsPage;
  let fixture: ComponentFixture<CaseDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
