import { TestBed } from '@angular/core/testing';

import { ColleguesService } from './collegues.service';

describe('ColleguesService', () => {
  let service: ColleguesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColleguesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
