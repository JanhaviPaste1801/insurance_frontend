import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewPolicyDetailsComponent } from './adminview-policy-details.component';

describe('AdminviewPolicyDetailsComponent', () => {
  let component: AdminviewPolicyDetailsComponent;
  let fixture: ComponentFixture<AdminviewPolicyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewPolicyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewPolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
