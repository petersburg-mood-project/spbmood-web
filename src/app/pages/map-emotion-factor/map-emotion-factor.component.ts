
import { Component } from '@angular/core';
import {
	mapEmotionFactorDataAnimals,
	mapEmotionFactorDataCity,
	mapEmotionFactorDataDistrictIssues,
	mapEmotionFactorDataEducation,
	mapEmotionFactorDataEmpty,
	mapEmotionFactorDataFamily,
	mapEmotionFactorDataHousing,
	mapEmotionFactorDataLeisure,
	mapEmotionFactorDataOverall,
	mapEmotionFactorDataSport,
	mapEmotionFactorDataTransport,
	mapEmotionFactorDataWork,
} from '../../../assets/data/map-emorion-factor-data';
import { mapAnimations } from '../../animations';
import { LegendComponent } from '../../components/legend/legend.component';
import { MapComponent } from '../../components/map/map.component';
import { SubtitleComponent } from '../../components/subtitle/subtitle.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
	selector: 'app-map-emotion-factor',
	standalone: true,
	imports: [
    TitleComponent,
    SubtitleComponent,
    LegendComponent,
    MapComponent
],
	templateUrl: './map-emotion-factor.component.html',
	styleUrl: './map-emotion-factor.component.scss',
	animations: [mapAnimations],
})
export class MapEmotionFactorComponent {
	content = mapEmotionFactorDataOverall;
	emptyMapImage = mapEmotionFactorDataEmpty.image;
	renderMap = true;
	togglesTitle = 'Сравнение карт по темам';
	togglesSubtitle = 'Выберите тему, чтобы увидеть соответствующую карту:';

	dataSources = [
		{ title: 'Общая карта', data: mapEmotionFactorDataOverall },
		{ title: 'Город', data: mapEmotionFactorDataCity },
		{ title: 'ЖКХ', data: mapEmotionFactorDataHousing },
		{ title: 'Животные', data: mapEmotionFactorDataAnimals },
		{ title: 'Отдых', data: mapEmotionFactorDataLeisure },
		{ title: 'Проблемы района', data: mapEmotionFactorDataDistrictIssues },
		{ title: 'Работа', data: mapEmotionFactorDataWork },
		{ title: 'Семья', data: mapEmotionFactorDataFamily },
		{ title: 'Спорт', data: mapEmotionFactorDataSport },
		{ title: 'Транспорт', data: mapEmotionFactorDataTransport },
		{ title: 'Учеба/образование', data: mapEmotionFactorDataEducation },
	];

	toggles = this.dataSources.map((item, index) => ({
		name: item.title,
		index: index,
		checked: index === 0, // Инициализируем "Общая карта" как включенный тоггл
	}));

	onToggleClick(event: Event, toggleIndex: number) {
		const isChecked = (event.target as HTMLInputElement).checked;
		if (toggleIndex === 0 && this.toggles[0].checked) {
			// Если "Общая карта" уже включена и на неё снова нажали, отменяем переключение
			event.preventDefault();
			return;
		}
		if (isChecked) {
			// Если включен любой другой тоггл, выключаем "Общая карта"
			this.toggles.forEach((toggle, index) => {
				toggle.checked = index === toggleIndex;
			});
			this.content = { ...this.dataSources[toggleIndex].data };
		} else if (toggleIndex !== 0) {
			// Если выключается любой другой тоггл, включаем "Общая карта"
			this.toggles.forEach((toggle, index) => {
				toggle.checked = index === 0; // Только "Общая карта" включена
			});
			this.content = { ...mapEmotionFactorDataOverall };
		}
		this.renderMap = false;
		setTimeout(() => (this.renderMap = true), 0);
	}
}
