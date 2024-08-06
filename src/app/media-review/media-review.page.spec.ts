import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaReviewPage } from './media-review.page';

describe('MediaReviewPage', () => {
  let component: MediaReviewPage;
  let fixture: ComponentFixture<MediaReviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
