import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonHomeComponent } from './json-home.component';

describe('JsonHomeComponent', () => {
  let component: JsonHomeComponent;
  let fixture: ComponentFixture<JsonHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
