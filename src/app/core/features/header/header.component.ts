import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { faBell, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { OverviewBtnComponent } from '../../ui-components/buttons/overviewbtn/overviewbtn.component';
import { PchartBtnComponent } from '../../ui-components/buttons/pchartbtn/pchartbtn.component';
import { CallBtnComponent } from '../../ui-components/buttons/calbtn/callbtn.component';
import { DocBtnComponent } from '../../ui-components/buttons/docbtn/docbtn.component';
import { MsgBtnComponent } from '../../ui-components/buttons/msgbtn/msgbtn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownComponent } from '../../ui-components/dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatDividerModule,FontAwesomeModule,OverviewBtnComponent,PchartBtnComponent,CallBtnComponent,DocBtnComponent,MsgBtnComponent,DropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faSearch = faSearch;
  faBell = faBell;
  faUser = faUser;
}
