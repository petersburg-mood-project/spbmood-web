import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-legend',
	templateUrl: './legend.component.html',
	styleUrls: ['./legend.component.scss'],
	standalone: true,
	imports: [CommonModule],
})
export class LegendComponent implements OnInit {
  @Input() gradient = '#000 #fff';
	@Input() labels = ['0%', '25%', '50%', '75%', '100%'];
	@Input() labelStyle: { [key: string]: string } = {}; 
	gradientStyle: { [key: string]: string } = {};
	ticks: { position: string; label?: string }[] = [];

	ngOnInit(): void {
		this.updateGradient();
		this.createTicks();
	}

	private updateGradient(): void {
		this.gradientStyle = {
			background: `linear-gradient(to right, ${this.gradient})`,
			height: '20px',
			borderRadius: '10px',
			position: 'relative',
		};
	}

	private createTicks(): void {
		const numberOfTicks = 5;
		const offset = 12;
		const tickSpacing = 100 / (numberOfTicks - 1);
		for (let i = 0; i < numberOfTicks; i++) {
			let position;
			if (i === 0) {
				position = `${offset}px`;
			} else if (i === numberOfTicks - 1) {
				position = `calc(100% - ${offset}px)`;
			} else {
				position = `calc(${tickSpacing * i}% - ${offset}px)`;
			}
			const label = this.labels[i];
			this.ticks.push({ position, label });
		}
	}
}
