import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDevicesComponent } from './management-devices.component';

describe('ManagementDevicesComponent', () => {
  let component: ManagementDevicesComponent;
  let fixture: ComponentFixture<ManagementDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
