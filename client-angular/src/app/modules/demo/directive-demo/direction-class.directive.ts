import { Directive, Input, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DirectionService } from './direction.service';

@Directive({
  selector: '[directionClass]'
})
export class DirectionClassDirective implements OnDestroy {
  private subscription: Subscription;

  @Input('directionClass') className: string;
  
  constructor(private el: ElementRef, private renderer: Renderer2, private directionService: DirectionService) {}

  // Method to add or remove class based on input observable
  applyDirectionClass(isLTR: boolean): void {
    if (isLTR) {
      this.renderer.addClass(this.el.nativeElement, this.className);
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.className);
    }
  }

  // Method to subscribe to observable
  subscribeToDirectionChanges(observable: Observable<boolean>): void {
    this.subscription = observable.subscribe(isLTR => {
      this.applyDirectionClass(isLTR);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

     // Method to emit direction change for LTR
     setLTR(): void {
      this.directionService.emitDirection(false);
      console.log("Hebrew")
    }
  
    // Method to emit direction change for RTL
    setRTL(): void {
      this.directionService.emitDirection(true);
      console.log("English")
    }
}
