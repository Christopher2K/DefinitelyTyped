import { Color } from 'ol/color';
import Target from 'ol/events/Target';
import ImageState from 'ol/ImageState';
import { Size } from 'ol/size';
export function get(image: HTMLImageElement | HTMLCanvasElement, src: string, size: Size, crossOrigin: string, imageState: ImageState, color: Color): IconImage;
export default class IconImage extends Target {
    constructor(image: HTMLImageElement | HTMLCanvasElement, src: string, size: Size, crossOrigin: string, imageState: ImageState, color: Color);
    getHitDetectionImage(pixelRatio: number): HTMLImageElement | HTMLCanvasElement;
    getImage(pixelRatio: number): HTMLImageElement | HTMLCanvasElement;
    getImageState(): ImageState;
    getSize(): Size;
    getSrc(): string;
    load(): void;
}
