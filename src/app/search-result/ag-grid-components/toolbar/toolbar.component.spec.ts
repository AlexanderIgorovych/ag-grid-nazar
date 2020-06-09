import {
	TestBed,
	async,
	ComponentFixture,
	inject,
} from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { GridColumnsDefinitionService } from '../../services/columns-definitions.service';
import { CustomStatsToolPanelComponent } from './toolbar.component';
import {
	mockIToolPanelParamsNgGrid,
	mockParamsNgGrid,
} from '../../../../testing/helpers.spec';

describe('CustomStatsToolPanelComponent', () => {
	let component: CustomStatsToolPanelComponent;
	let fixture: ComponentFixture<CustomStatsToolPanelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [CommonModule],
			declarations: [CustomStatsToolPanelComponent],
			providers: [GridColumnsDefinitionService],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CustomStatsToolPanelComponent);
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
	it('should init refresh() ', () => {
		spyOn(component, 'refresh').and.callThrough();
		component.refresh();
		expect(component.refresh).toHaveBeenCalled();
	});

	it('should (agInit)', () => {
		expect(component.params).toEqual(undefined);
		expect(component.totalRecordsCount).toEqual(undefined);
		expect(component.selectedRowsCount).toEqual(undefined);
		expect(component.selectionModeOn).toEqual(undefined);
		const expectedValueTotalRecordsCount = 0;
		const expectedValueSelectedRowsCount = 0;
		const expectedValueSelectionModeOn = false;
		component.agInit(mockIToolPanelParamsNgGrid);
		expect(component.totalRecordsCount).toEqual(expectedValueTotalRecordsCount);
		expect(component.selectedRowsCount).toEqual(expectedValueSelectedRowsCount);
		expect(component.selectionModeOn).toEqual(expectedValueSelectionModeOn);
	});

	it('should (toggleSelectionMode) case selectionModeOn = true', inject(
		[GridColumnsDefinitionService],
		(service: GridColumnsDefinitionService) => {
			spyOn(component, 'toggleSelectionMode').and.callThrough();
			component.selectionModeOn = true;
			component.params = mockIToolPanelParamsNgGrid;
			service.setColumnApi(mockParamsNgGrid);
			component.toggleSelectionMode();
			expect(component.toggleSelectionMode).toHaveBeenCalled();
		}
	));

	it('should (toggleSelectionMode) case selectionModeOn = false', inject(
		[GridColumnsDefinitionService],
		(service: GridColumnsDefinitionService) => {
			spyOn(component, 'toggleSelectionMode').and.callThrough();
			component.selectionModeOn = false;
			component.params = mockIToolPanelParamsNgGrid;
			service.setColumnApi(mockParamsNgGrid);
			component.toggleSelectionMode();
			expect(component.toggleSelectionMode).toHaveBeenCalled();
		}
	));

	it('should init updateTotals() isSelected() == true', () => {
		spyOn(component, 'updateTotals').and.callThrough();
		component.params = {
			api: {
				forEachNode: (cb: (value) => void) => cb({ isSelected: () => true }),
			},
		};
		component.updateTotals();
		expect(component.updateTotals).toHaveBeenCalled();
		expect(component.totalRecordsCount).toEqual(1);
		expect(component.selectedRowsCount).toEqual(1);
	});

	it('should init updateTotals() isSelected() == false', () => {
		spyOn(component, 'updateTotals').and.callThrough();
		component.params = {
			api: {
				forEachNode: (cb: (value) => void) => cb({ isSelected: () => false }),
			},
		};
		component.updateTotals();
		expect(component.updateTotals).toHaveBeenCalled();
		expect(component.totalRecordsCount).toEqual(1);
		expect(component.selectedRowsCount).toEqual(0);
	});
});
