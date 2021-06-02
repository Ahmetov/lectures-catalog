import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureUpdateComponent } from './lecture-update.component';

describe('LectureUpdateComponent', () => {
  let component: LectureUpdateComponent;
  let fixture: ComponentFixture<LectureUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
