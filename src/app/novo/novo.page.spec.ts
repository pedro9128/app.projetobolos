import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPage } from './novo.page';

describe('NovoPage', () => {
  let component: NovoPage;
  let fixture: ComponentFixture<NovoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
