import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicChooseCoursesComponent } from './public-choose-courses.component';

describe('PublicChooseCoursesComponent', () => {
  let component: PublicChooseCoursesComponent;
  let fixture: ComponentFixture<PublicChooseCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicChooseCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicChooseCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
