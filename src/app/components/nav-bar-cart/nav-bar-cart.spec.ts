import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCart } from './nav-bar-cart';

describe('NavBarCart', () => {
  let component: NavBarCart;
  let fixture: ComponentFixture<NavBarCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarCart],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
