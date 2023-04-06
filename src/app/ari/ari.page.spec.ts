import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AriPage } from './ari.page';

describe('AriPage', () => {
  let component: AriPage;
  let fixture: ComponentFixture<AriPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
