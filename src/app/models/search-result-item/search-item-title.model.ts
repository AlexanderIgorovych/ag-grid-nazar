import { SearchResultItemTitleModel } from './search-item.model';

export interface SearchResultItemModel {
	publishedAt: string;
	title: SearchResultItemTitleModel;
	description: string;
	thumbnail: string;
}
