import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersettingsComponent } from './admin-usersettings.component';

describe('AdminUsersettingsComponent', () => {
  let component: AdminUsersettingsComponent;
  let fixture: ComponentFixture<AdminUsersettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsersettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
