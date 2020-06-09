import {
	TestBed,
	async,
	ComponentFixture,
	inject,
} from '@angular/core/testing';
import { CheckBoxHeaderComponent } from './checkbox-header';
import { UpdateService } from '../../services/update.service';
import { CommonModule } from '@angular/common';
import { mockIToolPanelParamsNgGrid } from '../../../../testing/helpers.spec';

describe('CheckBoxHeaderComponent', () => {
	let component: CheckBoxHeaderComponent;
	let fixture: ComponentFixture<CheckBoxHeaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [CommonModule],
			declarations: [CheckBoxHeaderComponent],
			providers: [UpdateService],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CheckBoxHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		jasmine.clock().install();
	});

	afterEach(() => {
		jasmine.clock().uninstall();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should (ngOnInit) case 1', inject(
		[UpdateService],
		(service: UpdateService) => {
			component.ngOnInit();
			expect(component.isChecked).toEqual(false);
			service.notify$.next({
				option: 'EventUpdateHeaderCheckbox',
				value: true,
			});
			jasmine.clock().tick(0);
			expect(component.isChecked).toEqual(true);
		}
	));

	it('should (ngOnInit) case 2', inject(
		[UpdateService],
		(service: UpdateService) => {
			component.ngOnInit();
			expect(component.isChecked).toEqual(false);
			service.notify$.next({ option: 'wrong data', value: true });
			jasmine.clock().tick(0);
			expect(component.isChecked).toEqual(false);
		}
	));

	it('should (agInit)', () => {
		expect(component.params).toEqual(undefined);
		const expectedValue = 'mockParams';
		component.agInit(expectedValue);
		expect(component.params).toEqual(expectedValue);
	});

	it('should (checkValue) case 1', () => {
		component.params = mockIToolPanelParamsNgGrid;
		component.isChecked = true;
		const expectedValue = false;
		component.checkValue({
			currentTarget: {
				checked: expectedValue,
			},
		});
		expect(component.isChecked).toEqual(expectedValue);
	});

	it('should (checkValue) case 2', () => {
		component.params = mockIToolPanelParamsNgGrid;
		component.isChecked = false;
		const expectedValue = true;
		component.checkValue({
			currentTarget: {
				checked: expectedValue,
			},
		});
		expect(component.isChecked).toEqual(expectedValue);
	});
});
