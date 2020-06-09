import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GridColumnsDefinitionService } from './search-result/services/columns-definitions.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultModule } from './search-result/search-result.module';
import { YoutubeApiService } from './search-result/services/youtube-api.service';
import { UpdateService } from './search-result/services/update.service';
import { ToastrModule } from 'ngx-toastr';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [
				BrowserModule,
				HttpClientModule,
				SearchResultModule,
				ToastrModule.forRoot(),
			],
			providers: [
				YoutubeApiService,
				GridColumnsDefinitionService,
				UpdateService,
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});
});
