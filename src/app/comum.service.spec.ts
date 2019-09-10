import { TestBed } from '@angular/core/testing';

import { ComumService } from './comum.service';

describe('ComumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComumService = TestBed.get(ComumService);
    expect(service).toBeTruthy();
  });
});
