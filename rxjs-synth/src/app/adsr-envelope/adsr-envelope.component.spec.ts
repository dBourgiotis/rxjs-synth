import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsrEnvelopeComponent } from './adsr-envelope.component';

describe('AdsrEnvelopeComponent', () => {
  let component: AdsrEnvelopeComponent;
  let fixture: ComponentFixture<AdsrEnvelopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsrEnvelopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsrEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
