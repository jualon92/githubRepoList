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

  it(' should initialize form', () => {
    expect(component.repoFormControl.value).toBe('');
  });

  it('should show error for required field', () => {
    //requires to be not empty
    component.repoFormControl.setValue('');

    fixture.detectChanges();
   expect(component.repoFormControl?.errors?.["required"] ).toBeTruthy();

  })


  it('should update form control value on input change', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'example-url';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.repoFormControl.value).toBe('example-url');
  });
});
