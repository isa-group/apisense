import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleLogDataComponent } from './console-log-data.component';

describe('ConsoleLogDataComponent', () => {
  let component: ConsoleLogDataComponent;
  let fixture: ComponentFixture<ConsoleLogDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleLogDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleLogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
