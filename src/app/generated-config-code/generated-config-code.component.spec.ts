import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedConfigCodeComponent } from './generated-config-code.component';

describe('GeneratedConfigCodeComponent', () => {
  let component: GeneratedConfigCodeComponent;
  let fixture: ComponentFixture<GeneratedConfigCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedConfigCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedConfigCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
