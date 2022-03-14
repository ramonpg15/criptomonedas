import { TestBed } from '@angular/core/testing';

import { CriptomonedasService } from './criptomonedas.service';

describe('CriptomonedasService', () => {
  let service: CriptomonedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriptomonedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
