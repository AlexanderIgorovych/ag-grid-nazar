import { Injectable } from '@angular/core';

@Injectable()
export class GridColumnsDefinitionService {
	columnApi;
	public setColumnApi(columnApi) {
		this.columnApi = columnApi;
	}
	public getColumnApi() {
		return this.columnApi;
	}
}
