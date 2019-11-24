import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoloPage } from './bolo.page';

describe('BoloPage', () => {
  let component: BoloPage;
  let fixture: ComponentFixture<BoloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
