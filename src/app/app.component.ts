
import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { routeAnimations } from './animations';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [routeAnimations],
})
export class AppComponent {
	constructor(private contexts: ChildrenOutletContexts) {}

	getRouteAnimationData() {
		return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
			'animation'
		];
	}
}
