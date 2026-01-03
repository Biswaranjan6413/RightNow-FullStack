import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyConnectionComponent } from './buy-connection.component';

describe('BuyConnectionComponent', () => {
  let component: BuyConnectionComponent;
  let fixture: ComponentFixture<BuyConnectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyConnectionComponent]
    });
    fixture = TestBed.createComponent(BuyConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
