import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationAckComponent } from './verification-ack.component';

describe('VerificationAckComponent', () => {
  let component: VerificationAckComponent;
  let fixture: ComponentFixture<VerificationAckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationAckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationAckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
