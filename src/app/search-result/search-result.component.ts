import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from './services/youtube-api.service';
import {
	ModuleRegistry,
	AllModules,
	Module,
} from '@ag-grid-enterprise/all-modules';
import { GridColumnsDefinitionService } from './services/columns-definitions.service';
import { DatePipe } from '@angular/common';
ModuleRegistry.registerModules(AllModules);
import { ToastrService } from 'ngx-toastr';
import { SearchResultItemModel } from '../models/search-result-item/search-item-title.model';
import { ThumbnailRendererComponent } from './ag-grid-components/renderers/thumbnail-renderer/thumbnail-renderer';
import { LinkRendererComponent } from './ag-grid-components/renderers/link-renderer/link-renderer';
import { CheckRendererComponent } from './ag-grid-components/renderers/check-renderer/check-renderer';
import { CustomStatsToolPanelComponent } from './ag-grid-components/toolbar/toolbar.component';
import { CheckBoxHeaderComponent } from './ag-grid-components/headers/checkbox-header';
import { ProgressiveComponent } from '../base-components/progressive.component';

@Component({
	selector: 'app-search-result',
	templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent extends ProgressiveComponent
	implements OnInit {
	public rowData: Array<SearchResultItemModel>;
	public columnDefs = [
		{
			headerName: 'Selection',
			colId: 'selection',
			hide: true,
			cellRenderer: 'checkRenderer',
			headerComponent: 'checkBoxHeader',
			width: 50,
		},
		{
			headerName: '',
			field: 'thumbnail',
			width: 250,
			cellRenderer: 'thumbnailRenderer',
		},
		{
			headerName: 'Published on',
			field: 'publishedAt',
			width: 150,
			valueFormatter: (date) =>
				this.datePipe.transform(date.value, 'yyyy-MM-dd'),
		},
		{
			headerName: 'Video Title',
			field: 'title',
			width: 350,
			cellRenderer: 'linkRenderer',
		},
		{ headerName: 'Description', field: 'description', width: 450 },
	];

	public modules: Module[] = AllModules;
	public icons = {
		'custom-stat': '<span class="ag-icon ag-icon-custom-stats"></span>',
	};
	public frameworkComponents = {
		customStatsToolPanel: CustomStatsToolPanelComponent,
		thumbnailRenderer: ThumbnailRendererComponent,
		linkRenderer: LinkRendererComponent,
		checkRenderer: CheckRendererComponent,
		checkBoxHeader: CheckBoxHeaderComponent,
	};

	public sideBar = {
		toolPanels: [
			{
				id: 'customStats',
				labelDefault: 'Toolbar',
				labelKey: 'customStats',
				iconKey: 'custom-stats',
				toolPanel: 'customStatsToolPanel',
			},
		],
		defaultToolPanel: 'customStats',
	};

	constructor(
		private readonly youtubeApiService: YoutubeApiService,
		private readonly gridColumnsDefinitionService: GridColumnsDefinitionService,
		private readonly toastService: ToastrService,
		private readonly datePipe: DatePipe
	) {
		super();
	}

	async ngOnInit() {
		await this.getGoogleYoutubeData();
	}
	public getContextMenuItems(params: any) {
		const defaultContextMenu: Array<any> = ['copy', 'copyWithHeaders', 'paste'];
		if (params.column && params.column.getColDef().field === 'title') {
			defaultContextMenu.push({
				name: 'Open in new tab',
				action: () => {
					window.open(params.value.link, '_blank');
				},
			});
		}
		return defaultContextMenu;
	}
	public onGridReady(params) {
		this.gridColumnsDefinitionService.setColumnApi(params.columnApi);
	}
	public async getGoogleYoutubeData(): Promise<void> {
		this.handleObservable<any>(
			this.youtubeApiService.getData(),
			(data: SearchResultItemModel[]) => {
				this.rowData = data;
			},
			(error) => {
				this.showErrorAlert(
					'HttpErrorResponse Error 400',
					'YouTube API v3 - keyInvalid or exceeded the limit 10,000 units per day.'
				);
				console.log(error);
			}
		);
	}

	public showErrorAlert(title: string, message: string) {
		this.toastService.error(message, title, {
			disableTimeOut: true,
			positionClass: 'toast-top-full-width',
			progressAnimation: 'decreasing',
			progressBar: true,
			closeButton: true,
		});
	}
}
