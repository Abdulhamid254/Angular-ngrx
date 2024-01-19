import { Directive, HostBinding, Input } from "@angular/core";


@Directive({
  selector: '[appCaAppearance]',
  standalone: true
})
export class CanAppearanceDirective {
  @Input()
  appearance: 'solid' | 'stroked' = 'stroked'

  @HostBinding('class')
  protected get computedHostClass(){
    return `df-${[this.appearance]}`
  }
}
