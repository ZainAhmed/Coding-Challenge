import { TestBed, inject } from '@angular/core/testing';

import { ImagedetailService } from './imagedetail.service';

describe('ImagedetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagedetailService]
    });
  });

  it('should be created', inject([ImagedetailService], (service: ImagedetailService) => {
    expect(service).toBeTruthy();
  }));
});
