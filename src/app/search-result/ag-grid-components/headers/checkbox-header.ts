import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../../services/update.service';

@Component({
	selector: 'app-loading-overlay',
	templateUrl: 'checkbox-header.component.html',
})
export class CheckBoxHeaderComponent implements OnInit {
	public params: any;
	public isChecked = false;
	constructor(private updateService: UpdateService) {}
	ngOnInit(): void {
		this.updateService.notifyObservable$.subscribe((res) => {
			if (
				res.hasOwnProperty('option') &&
				res.option === 'EventUpdateHeaderCheckbox'
			) {
				this.isChecked = res.value;
			}
		});
	}

	public agInit(params): void {
		this.params = params;
	}

	public checkValue(event: any): void {
		if (this.isChecked) {
			this.params.api.forEachNode((rowNode) => {
				rowNode.selectThisNode(false);
			});
		} else {
			this.params.api.forEachNode((rowNode) => {
				rowNode.selectThisNode(true);
			});
		}
		this.isChecked = event.currentTarget.checked;
	}
}
