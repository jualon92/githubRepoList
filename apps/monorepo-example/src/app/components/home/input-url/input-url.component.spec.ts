import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputUrlComponent } from './input-url.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('InputUrlComponent', () => {
  let component: InputUrlComponent;
  let fixture: ComponentFixture<InputUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputUrlComponent, ReactiveFormsModule,   TranslateModule.forRoot(), BrowserAnimationsModule],
      providers: [TranslateService]
    }).compileComponents();

    fixture = TestBed.createComponent(InputUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component!!', () => {
    expect(component).toBeTruthy();
  });
});
