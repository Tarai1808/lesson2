import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatcUsComponent } from './conatc-us.component';

describe('ConatcUsComponent', () => {
  let component: ConatcUsComponent;
  let fixture: ComponentFixture<ConatcUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConatcUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConatcUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
