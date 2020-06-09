import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ThumbnailRendererComponent } from './thumbnail-renderer';
import { mockICellRendererParamsNgGrid } from '../../../../../testing/helpers.spec';
describe('ThumbnailRendererComponent', () => {
	let component: ThumbnailRendererComponent;
	let fixture: ComponentFixture<ThumbnailRendererComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [CommonModule],
			declarations: [ThumbnailRendererComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ThumbnailRendererComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should (agInit)', () => {
		expect(component.imgSrc).toEqual(undefined);
		expect(component.params).toEqual(undefined);
		const expectedValueParams = mockICellRendererParamsNgGrid;
		component.agInit(expectedValueParams);
		expect(component.params).toEqual(expectedValueParams);
	});

	it('should return (refresh()) ', () => {
		spyOn(component, 'refresh').and.callThrough();
		const expectedValue = false;
		component.refresh();
		expect(component.refresh()).toEqual(expectedValue);
	});
});
