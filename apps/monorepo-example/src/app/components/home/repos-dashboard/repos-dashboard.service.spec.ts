import { TestBed } from '@angular/core/testing';

import { ReposDashboardService } from './repos-dashboard.service';
import { HttpClientModule } from '@angular/common/http';

describe('ReposDashboardService', () => {
  let service: ReposDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ReposDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
