import { inject, TestBed } from '@angular/core/testing';

// Other imports
import { GridColumnsDefinitionService } from './columns-definitions.service';
import { ColumnApi } from 'ag-grid-community';

describe('GridColumnsDefinitionService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [GridColumnsDefinitionService],
		});
	});
	it('should be created', inject(
		[GridColumnsDefinitionService],
		(service: GridColumnsDefinitionService) => {
			expect(service).toBeTruthy();
		}
	));

	it('setColumnApi()', inject(
		[GridColumnsDefinitionService],
		(service: GridColumnsDefinitionService) => {
			expect(service.columnApi).toBe(undefined);
			service.setColumnApi(new ColumnApi());
			expect(service.columnApi).not.toBe(undefined);
		}
	));

	it('getColumnApi()', inject(
		[GridColumnsDefinitionService],
		(service: GridColumnsDefinitionService) => {
			const expectedValue = new ColumnApi();
			service.columnApi = expectedValue;
			expect(service.getColumnApi()).toBe(expectedValue);
		}
	));
});
