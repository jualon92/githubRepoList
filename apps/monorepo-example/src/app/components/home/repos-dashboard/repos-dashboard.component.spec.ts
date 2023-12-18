import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReposDashboardComponent } from './repos-dashboard.component';

describe('ReposDashboardComponent', () => {
  let component: ReposDashboardComponent;
  let fixture: ComponentFixture<ReposDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReposDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReposDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
