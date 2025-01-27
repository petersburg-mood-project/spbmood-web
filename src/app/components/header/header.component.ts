import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	constructor(private router: Router) {}

	isActiveMenu(menu: string): boolean {
		const url = this.router.url;
		return menu === 'home' && (url === '/emotion-factor' || url === '/');
	}
}
