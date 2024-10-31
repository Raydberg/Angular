import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {


   @Input()
   public url!:string 
   ngOnInit(): void {
   if(!this.url) throw new Error("URL is required")
  }
  @Input()
  public alt!: string;
  public hasLoade:boolean = false;
  onLoand(){
    this.hasLoade=true;
  }
}
