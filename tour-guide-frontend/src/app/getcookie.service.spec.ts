import { TestBed } from '@angular/core/testing';

import { GetcookieService } from './getcookie.service';

describe('GetcookieService', () => {
  let service: GetcookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
