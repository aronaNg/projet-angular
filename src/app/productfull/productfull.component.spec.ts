import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfullComponent } from './productfull.component';

describe('ProductfullComponent', () => {
  let component: ProductfullComponent;
  let fixture: ComponentFixture<ProductfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
