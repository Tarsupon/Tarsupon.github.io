import { TestBed } from '@angular/core/testing';

import { ProjecySelectService } from './projecy-select.service';

describe('ProjecySelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjecySelectService = TestBed.get(ProjecySelectService);
    expect(service).toBeTruthy();
  });
});
