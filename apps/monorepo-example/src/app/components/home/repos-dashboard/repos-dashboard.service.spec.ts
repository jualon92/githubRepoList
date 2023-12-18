import { TestBed } from '@angular/core/testing';

import { ReposDashboardService } from './repos-dashboard.service';

describe('ReposDashboardService', () => {
  let service: ReposDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
