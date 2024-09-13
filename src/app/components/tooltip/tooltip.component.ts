import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-tooltip',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './tooltip.component.html',
	styleUrl: './tooltip.component.scss',
})
export class TooltipComponent {
	@Input() isVisible: boolean = false;
	@Input() districtName?: string | null = '';
	@Input() population?: number | null = 0;
	@Input() area?: number | null = 0;
	@Input() position: TooltipPosition = {
		top: '0px',
		left: '0px',
	};
	@Output() closed = new EventEmitter<void>();

	updatePosition(x: number, y: number) {
		this.position = { top: `${y}px`, left: `${x}px` };
	}

	openTooltip() {
		this.isVisible = true;
	}

	closeTooltip() {
		this.isVisible = false;
		this.closed.emit();
	}

	toggleTooltip() {
		this.isVisible = !this.isVisible;
	}
}

export interface TooltipPosition {
	top: string;
	left: string;
}

export interface TooltipData {
	districtName?: string | null;
	population?: number | null;
	area?: number | null;
}
