import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketItemDetailsComponent } from './basket-item-details.component';

describe('BasketItemDetailsComponent', () => {
  let component: BasketItemDetailsComponent;
  let fixture: ComponentFixture<BasketItemDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketItemDetailsComponent]
    });
    fixture = TestBed.createComponent(BasketItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
