import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { MapEmotionFactorComponent } from './pages/map-emotion-factor/map-emotion-factor.component';
import { MapSurveyComponent } from './pages/map-survey/map-survey.component';
import { PublicationsComponent } from './pages/publications/publications.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/about' },
	{
		path: 'about',
		component: AboutComponent,
		data: { animation: 'aboutPage' },
	},
	{
		path: 'survey',
		component: MapSurveyComponent,
		data: { animation: 'surveyPage' },
	},
	{
		path: 'emotion-factor',
		component: MapEmotionFactorComponent,
		data: { animation: 'emotionFactorPage' },
	},
	{
		path: 'publications',
		component: PublicationsComponent,
		data: { animation: 'publicationsPage' },
	},
];
