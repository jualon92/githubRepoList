import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReposDashboardComponent } from './repos-dashboard.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ReposDashboardComponent', () => {
  let component: ReposDashboardComponent;
  let fixture: ComponentFixture<ReposDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReposDashboardComponent, HttpClientTestingModule, TranslateModule.forRoot(), NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ReposDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display loading spinner when loadingData is true', () => {
    component.loadingData = true;
    fixture.detectChanges();

    // Test if the loading spinner is rendsered
    const spinnerElement = fixture.nativeElement.querySelector('.spinner-container mat-spinner');
    expect(spinnerElement).toBeTruthy();
  });

});
