import { TestBed } from '@angular/core/testing';

import { OrcamentosService } from './orcamentos.service';

describe('OrcamentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrcamentosService = TestBed.get(OrcamentosService);
    expect(service).toBeTruthy();
  });
});
