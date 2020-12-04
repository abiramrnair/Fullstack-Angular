import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPolicyEditComponent } from './admin-policy-edit.component';

describe('AdminPolicyEditComponent', () => {
  let component: AdminPolicyEditComponent;
  let fixture: ComponentFixture<AdminPolicyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPolicyEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPolicyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
