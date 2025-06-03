import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUpdate } from './movie-update';

describe('MovieUpdate', () => {
  let component: MovieUpdate;
  let fixture: ComponentFixture<MovieUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
