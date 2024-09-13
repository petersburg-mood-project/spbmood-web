import {
	AfterViewInit,
	Component,
	ElementRef,
	HostListener,
	Input,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { districtData } from '../../../assets/data/district-data';
import {
	TooltipComponent,
	TooltipData,
	TooltipPosition,
} from '../tooltip/tooltip.component';

@Component({
	selector: 'app-map',
	imports: [TooltipComponent],
	standalone: true,
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
	@Input() set image(value: string) {
		this._svg = value;
		this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(this._svg);
	}

	@ViewChild('tooltip') tooltipInstance!: TooltipComponent;

	safeSvg: SafeHtml = '';
	private _svg: string = '';
	private lastActiveElement: SVGElement | null = null;
	tooltipVisible: boolean = false;
	tooltipInfo?: TooltipData | null;
	tooltipPosition?: TooltipPosition;

	constructor(
		private sanitizer: DomSanitizer,
		private renderer: Renderer2,
		private el: ElementRef,
	) {}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.setupSvgInteractions();
			this.applySvgStyles();
		});
	}

	@HostListener('document:click', ['$event'])
	onDocumentClick(event: MouseEvent) {
		const pathClicked = (event.target as Element).closest('path');
		if (!pathClicked) {
			this.closeTooltip();
		}
	}

	setupSvgInteractions() {
		const svgElement = this.el.nativeElement.querySelector('.map-image');
		svgElement.querySelectorAll('path').forEach((path: SVGAElement) => {
			path.addEventListener('click', event => {
				this.handleClickOnPath(path, event);
			});
		});
	}

	handleClickOnPath(path: SVGAElement, event: MouseEvent) {
		const svgRect = this.el.nativeElement
			.querySelector('.map-image')
			.getBoundingClientRect();
		const x = event.clientX - svgRect.left;
		const y = event.clientY - svgRect.top;
		const pathId = path.id;
		const districtInfo = districtData.find(d => d.id === pathId) || {
			districtName: 'Без названия',
			population: 0,
			area: 0,
		};
		this.tooltipInfo = districtInfo;
		this.tooltipVisible = true;
		this.tooltipPosition = { left: `${x}px`, top: `${y}px` };
		this.applyActiveStyles(path);
		if (this.lastActiveElement && this.lastActiveElement !== path) {
			this.resetStyles(this.lastActiveElement);
		}
		this.lastActiveElement = path as SVGElement;
	}

	closeTooltip() {
		if (this.lastActiveElement) {
			this.resetStyles(this.lastActiveElement);
			this.lastActiveElement = null;
		}
		this.tooltipVisible = false;
	}

	private applyActiveStyles(element: SVGElement) {
		this.renderer.setStyle(element, 'opacity', '0.8');
		this.renderer.setStyle(element, 'stroke', '#ffffff');
		this.renderer.setStyle(element, 'stroke-width', '2');
	}

	private resetStyles(element: SVGElement) {
		this.renderer.setStyle(element, 'stroke', 'transparent');
		this.renderer.setStyle(element, 'stroke-width', '0');
		this.renderer.setStyle(element, 'opacity', '1');
	}

	private applySvgStyles() {
		const paths = this.el.nativeElement.querySelectorAll(
			'.map-image svg g path',
		);
		paths.forEach((path: SVGAElement) => {
			this.renderer.setStyle(path, 'cursor', 'pointer');
			this.renderer.setStyle(path, 'transition', 'opacity 0.3s');
			this.renderer.listen(path, 'mouseover', () => {
				this.renderer.setStyle(path, 'opacity', '0.9');
			});
			this.renderer.listen(path, 'mouseout', () => {
				this.renderer.setStyle(path, 'opacity', '1');
			});
		});
	}
}
