import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CanColorDirective } from "../../../directives/can-color.directive";
import { CanAppearanceDirective } from "../../../directives/can-appearance.directive";


@Component({
  selector: 'msgbtn[dfButton], a[dfButton]',
  standalone: true,
  template: `
    <span class="button-label">
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./msgbtn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  hostDirectives:[
    {
      directive:  CanColorDirective,
      inputs: ['color']
    },
    {
      directive: CanAppearanceDirective,
      inputs: ['appearance:type']
    }
  ]
})
export class MsgBtnComponent {

}
