import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaidataDialogComponent } from './vaidata-dialog.component';

describe('VaidataDialogComponent', () => {
  let component: VaidataDialogComponent;
  let fixture: ComponentFixture<VaidataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaidataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaidataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
