import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
	selector: 'app-thumbnail-cell',
	template: `<img [src]="imgSrc" alt="thumbnail-default" />`,
})
export class ThumbnailRendererComponent implements ICellRendererAngularComp {
	public params: any;
	public imgSrc: string;

	public agInit(params: any): void {
		this.params = params;
		this.imgSrc = this.params.value;
	}

	public refresh(): boolean {
		return false;
	}
}
