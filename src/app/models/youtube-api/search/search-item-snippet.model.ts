import { SnippetThumbnailsModel } from './snippet-thumbnails.model';

export interface SearchItemSnippetModel {
	publishedAt: string;
	channelId: string;
	title: string;
	description: string;
	thumbnails: SnippetThumbnailsModel;
	channelTitle: string;
	liveBroadcastContent: string;
}
