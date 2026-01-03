import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegstrationAddressComponent } from './regstration-address.component';

describe('RegstrationAddressComponent', () => {
  let component: RegstrationAddressComponent;
  let fixture: ComponentFixture<RegstrationAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegstrationAddressComponent]
    });
    fixture = TestBed.createComponent(RegstrationAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
