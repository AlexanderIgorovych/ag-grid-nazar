import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { LinkRendererComponent } from './link-renderer';
import {
	mockICellRendererAngularCompNgGrid,
	mockICellRendererParamsNgGrid,
} from '../../../../../testing/helpers.spec';

describe('LinkRenderer', () => {
	let component: LinkRendererComponent;
	let fixture: ComponentFixture<LinkRendererComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [CommonModule],
			declarations: [LinkRendererComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LinkRendererComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should (agInit)', () => {
		expect(component.params).toEqual(undefined);
		expect(component.link).toEqual(undefined);
		expect(component.text).toEqual(undefined);
		const expectedValueParams = mockICellRendererParamsNgGrid;
		component.agInit(expectedValueParams);
		expect(component.params).toEqual(expectedValueParams);
		expect(component.link).toEqual(mockICellRendererParamsNgGrid.value.link);
		expect(component.text).toEqual(mockICellRendererParamsNgGrid.value.text);
	});

	it('should return (refresh()) ', () => {
		spyOn(component, 'refresh').and.callThrough();

		const expectedValue = false;
		component.refresh();
		expect(component.refresh()).toEqual(expectedValue);
	});
});
