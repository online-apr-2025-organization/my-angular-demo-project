import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHeader } from './product-header';

describe('ProductHeader', () => {
  let component: ProductHeader;
  let fixture: ComponentFixture<ProductHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
