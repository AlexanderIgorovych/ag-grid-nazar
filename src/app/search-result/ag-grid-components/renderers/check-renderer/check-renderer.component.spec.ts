import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { CheckRendererComponent } from './check-renderer';
import { UpdateService } from '../../../services/update.service';
import { mockICellRendererAngularCompNgGrid } from '../../../../../testing/helpers.spec';

describe('LinkRendererComponent', () => {
	let component: CheckRendererComponent;
	let fixture: ComponentFixture<CheckRendererComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [CommonModule],
			declarations: [CheckRendererComponent],
			providers: [UpdateService],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CheckRendererComponent);
		component = fixture.componentInstance;
		// fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should (agInit)', () => {
		expect(component.params).toEqual(undefined);
		expect(component.arrayListCheckbox).toEqual(undefined);
		const expectedValueParams = mockICellRendererAngularCompNgGrid;
		component.agInit(expectedValueParams);
		expect(component.params).toEqual(expectedValueParams);
	});

	it('should return (refresh()) ', () => {
		spyOn(component, 'refresh').and.callThrough();
		const expectedValue = false;
		component.refresh();
		expect(component.refresh()).toEqual(expectedValue);
	});

	it('should return checkArrayElement() case 1 ', () => {
		spyOn(component, 'checkArrayElement').and.callThrough();
		const expectedValueArray = [true, false, true];
		expect(expectedValueArray.every(component.checkArrayElement)).toEqual(
			false
		);
	});

	it('should return all true  checkArrayElement() case 2 ', () => {
		spyOn(component, 'checkArrayElement').and.callThrough();
		const expectedValueArray = [true, true, true];
		expect(expectedValueArray.every(component.checkArrayElement)).toEqual(true);
	});

	it('should return all false checkArrayElement() case 3 ', () => {
		spyOn(component, 'checkArrayElement').and.callThrough();
		const expectedValueArray = [false, false, false];
		expect(expectedValueArray.every(component.checkArrayElement)).toEqual(true);
	});

	it('should (checkValue)', () => {
		component.params = mockICellRendererAngularCompNgGrid;
		const expectedValue = false;
		expect(
			component.checkValue({
				currentTarget: {
					checked: expectedValue,
				},
			})
		);
	});
});
