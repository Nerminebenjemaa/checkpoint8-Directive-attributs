import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycompenentComponent } from './mycompenent.component';

describe('MycompenentComponent', () => {
  let component: MycompenentComponent;
  let fixture: ComponentFixture<MycompenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycompenentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycompenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
