import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-form-config',
  templateUrl: './form-config.component.html',
  styleUrls: ['./form-config.component.css']
})
export class FormConfigComponent {

    @Input()
    model: Partial<ConfigurationModel>;

    @Output()
    modelChange: EventEmitter<Partial<ConfigurationModel>> = new EventEmitter();

      onModelSave() {
          this.modelChange.emit({...this.model});
      }

}
