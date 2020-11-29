import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReviewsettingsComponent } from './admin-reviewsettings.component';

describe('AdminReviewsettingsComponent', () => {
  let component: AdminReviewsettingsComponent;
  let fixture: ComponentFixture<AdminReviewsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReviewsettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReviewsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
