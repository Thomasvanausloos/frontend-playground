import { TestBed } from '@angular/core/testing';

import { KunlaboratoriumDemoLibService } from './kunlaboratorium-demo-lib.service';

describe('KunlaboratoriumDemoLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KunlaboratoriumDemoLibService = TestBed.get(KunlaboratoriumDemoLibService);
    expect(service).toBeTruthy();
  });
});
