import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: "[appHighLight]"
})

export class HighlightDirective implements OnInit {

    @Input()
    // highLightColor: string;
    appHighLight: string

    constructor(private _el: ElementRef) {
        console.log("HighLightDirective created")
    }
    ngOnInit(): void {
        //     this._el.nativeElement.style.backgroundColor = this.appHighLight || "red"
    }
    @HostListener("mouseenter")
    onMouseEnter() {
        this._el.nativeElement.style.backgroundColor = this.appHighLight || "red"
    }
    @HostListener("mouseleave")
    onMouseLeave() {
        this._el.nativeElement.style.backgroundColor = null
    }
    @HostBinding("[attr.id]")
    id: number = 1;

}