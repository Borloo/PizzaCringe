import { TestBed } from '@angular/core/testing';

import { ListPizzaService } from './list-pizza.service';

describe('ListPizzaService', () => {
  let service: ListPizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
