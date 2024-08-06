import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseListPage } from './case-list.page';

describe('CaseListPage', () => {
  let component: CaseListPage;
  let fixture: ComponentFixture<CaseListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
