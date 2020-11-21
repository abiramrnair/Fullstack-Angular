import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCoursesComponent } from './choose-courses.component';

describe('ChooseCoursesComponent', () => {
  let component: ChooseCoursesComponent;
  let fixture: ComponentFixture<ChooseCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
