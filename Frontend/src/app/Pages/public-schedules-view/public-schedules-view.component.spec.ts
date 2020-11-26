import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSchedulesViewComponent } from './public-schedules-view.component';

describe('PublicSchedulesViewComponent', () => {
  let component: PublicSchedulesViewComponent;
  let fixture: ComponentFixture<PublicSchedulesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSchedulesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSchedulesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
