import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinegamesComponent } from './onlinegames.component';

describe('OnlinegamesComponent', () => {
  let component: OnlinegamesComponent;
  let fixture: ComponentFixture<OnlinegamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinegamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlinegamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
