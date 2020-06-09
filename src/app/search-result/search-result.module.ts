import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule, DatePipe } from '@angular/common';

import { SearchResultComponent } from './search-result.component';
import { GridColumnsDefinitionService } from './services/columns-definitions.service';
import { YoutubeApiService } from './services/youtube-api.service';
import { UpdateService } from './services/update.service';
import { ThumbnailRendererComponent } from './ag-grid-components/renderers/thumbnail-renderer/thumbnail-renderer';
import { LinkRendererComponent } from './ag-grid-components/renderers/link-renderer/link-renderer';
import { CheckRendererComponent } from './ag-grid-components/renderers/check-renderer/check-renderer';
import { CustomStatsToolPanelComponent } from './ag-grid-components/toolbar/toolbar.component';
import { CheckBoxHeaderComponent } from './ag-grid-components/headers/checkbox-header';

@NgModule({
	imports: [
		CommonModule,
		AgGridModule.withComponents([
			CustomStatsToolPanelComponent,
			ThumbnailRendererComponent,
			LinkRendererComponent,
			CheckRendererComponent,
			CheckBoxHeaderComponent,
		]),
	],
	declarations: [SearchResultComponent],
	exports: [SearchResultComponent],
	providers: [
		GridColumnsDefinitionService,
		YoutubeApiService,
		UpdateService,
		DatePipe,
	],
})
export class SearchResultModule {}
