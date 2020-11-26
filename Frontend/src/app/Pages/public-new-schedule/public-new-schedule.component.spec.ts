import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNewScheduleComponent } from './public-new-schedule.component';

describe('PublicNewScheduleComponent', () => {
  let component: PublicNewScheduleComponent;
  let fixture: ComponentFixture<PublicNewScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicNewScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicNewScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
