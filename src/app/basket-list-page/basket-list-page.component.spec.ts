import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketListPageComponent } from './basket-list-page.component';

describe('BasketListPageComponent', () => {
  let component: BasketListPageComponent;
  let fixture: ComponentFixture<BasketListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketListPageComponent]
    });
    fixture = TestBed.createComponent(BasketListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
