import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasComponent} from "./pizza.component";

describe('PizzaComponent', () => {
  let component: PizzasComponent;
  let fixture: ComponentFixture<PizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
