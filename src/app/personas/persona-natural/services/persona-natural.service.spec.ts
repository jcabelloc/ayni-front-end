import { TestBed, inject } from '@angular/core/testing';

import { PersonaNaturalService } from './persona-natural.service';

describe('PersonaNaturalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonaNaturalService]
    });
  });

  it('should be created', inject([PersonaNaturalService], (service: PersonaNaturalService) => {
    expect(service).toBeTruthy();
  }));
});
