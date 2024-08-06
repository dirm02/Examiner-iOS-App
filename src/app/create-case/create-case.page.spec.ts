import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCasePage } from './create-case.page';

describe('CreateCasePage', () => {
  let component: CreateCasePage;
  let fixture: ComponentFixture<CreateCasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
