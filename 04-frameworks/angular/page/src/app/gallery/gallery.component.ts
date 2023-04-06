import { Component } from '@angular/core';
import { ImageEntity } from '../model/ImageEntity';
import { ImageList } from 'src/api/mock-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {

  gallery: ImageEntity[] = [];
  selected: ImageEntity;
  currentKey: number;
  length: number;
  size: number;
  isPlaying: boolean;
  interval: any;

  constructor() {
    this.gallery = ImageList;
    this.selected = this.gallery[0];
    this.currentKey = 0;
    this.length = this.gallery.length;
    this.size = 1;
    this.isPlaying = false;
  }

  ngOnInit(): void {
  }

  zoomIn(): void {
    this.size++;
  }

  zoomOut(): void {
    this.size--;
  }

  select(id: string): void {
    this.size = 1;
    this.currentKey = this.gallery.map(e => e.id).indexOf(id);
    const obj = this.gallery.find(o => o.id === id);
    if(typeof obj==="object") {
      this.selected = obj;
    } else {
      this.selected = this.gallery[0];
      this.currentKey=0;
    }
  }

  handlePrev(): void{
    this.size = 1;
    if(this.currentKey>0) this.currentKey--;
    else this.currentKey = this.length-1;
    this.selected = this.gallery[this.currentKey];
  }

  handleNext(): void {
    this.size = 1;
    if(this.currentKey<this.length-1) this.currentKey++;
    else  this.currentKey=0;
    this.selected = this.gallery[this.currentKey];
  }

  previousBtn(): void {
    if(this.currentKey>0) {
      this.handlePrev();
    }
  }

  nextBtn(): void {
    if(this.currentKey<this.length-1) {
      this.handleNext();
    }
  }

  play(): void {
    this.isPlaying = true;
    this.interval = setInterval(() => {
      this.handleNext();
    }, 2000);
  }

  stop(): void {
    this.isPlaying = false;
    clearInterval(this.interval);
  }

}
