import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureViewDetailsComponent } from './lecture-view-details.component';

describe('LectureViewDetailsComponent', () => {
  let component: LectureViewDetailsComponent;
  let fixture: ComponentFixture<LectureViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureViewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
