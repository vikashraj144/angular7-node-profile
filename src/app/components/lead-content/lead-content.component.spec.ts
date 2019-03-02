import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadContentComponent } from './lead-content.component';

describe('LeadContentComponent', () => {
  let component: LeadContentComponent;
  let fixture: ComponentFixture<LeadContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
