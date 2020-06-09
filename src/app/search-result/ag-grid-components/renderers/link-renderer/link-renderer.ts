import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
	selector: 'app-link-cell',
	template: `<a href="{{ link }}">{{ text }}</a>`,
})
export class LinkRendererComponent implements ICellRendererAngularComp {
	public params: any;
	public text: string;
	public link: string;

	public agInit(params: any): void {
		this.params = params;
		this.text = this.params.value.text;
		this.link = this.params.value.link;
	}

	public refresh(): boolean {
		return false;
	}
}
