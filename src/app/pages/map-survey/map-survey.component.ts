
import {
	AfterViewInit,
	Component,
	ElementRef,
	OnDestroy,
	QueryList,
	ViewChildren,
} from '@angular/core';
import { mapSurveyData } from '../../../assets/data/map-survey-data';
import { LegendComponent } from '../../components/legend/legend.component';
import { MapComponent } from '../../components/map/map.component';
import { SubtitleComponent } from '../../components/subtitle/subtitle.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
	selector: 'app-map-survey',
	standalone: true,
	imports: [
    TitleComponent,
    SubtitleComponent,
    LegendComponent,
    MapComponent
],
	templateUrl: './map-survey.component.html',
	styleUrl: './map-survey.component.scss',
})
export class MapSurveyComponent implements AfterViewInit, OnDestroy {
	@ViewChildren('container') containers!: QueryList<ElementRef>;
	
	currentContentIndex = 0;
	contents = mapSurveyData;
	private observer!: IntersectionObserver;

	constructor() {}

	ngAfterViewInit() {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};

		this.observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				const containerRef = this.containers.find(
					container => container.nativeElement === entry.target,
				);
				if (containerRef) {
					const index = this.containers.toArray().indexOf(containerRef);
					if (entry.isIntersecting) {
						this.currentContentIndex = index;
					}
				}
			});
		}, observerOptions);

		this.containers.forEach(containerRef => {
			if (containerRef.nativeElement) {
				this.observer.observe(containerRef.nativeElement);
			}
		});
	}

	ngOnDestroy() {
		if (this.observer) {
			this.observer.disconnect();
		}
	}
}
