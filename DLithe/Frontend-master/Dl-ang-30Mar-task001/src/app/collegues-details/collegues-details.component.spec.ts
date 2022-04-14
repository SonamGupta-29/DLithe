import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleguesDetailsComponent } from './collegues-details.component';

describe('ColleguesDetailsComponent', () => {
  let component: ColleguesDetailsComponent;
  let fixture: ComponentFixture<ColleguesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColleguesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleguesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
