import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Status } from '@core/enums/status';
@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
})
export class ActionButtonsComponent {
  @Input() status: Status = Status.DISABLED;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() changeStatus = new EventEmitter();
}
