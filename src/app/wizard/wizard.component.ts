import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

    initialModel: Partial<ConfigurationModel> = {
      username: 'piotrl',
      template: '#github-profile-demo'
  };

  model: Partial<ConfigurationModel>;

  constructor() { }

  ngOnInit() {
      this.onModelUpdate(this.initialModel);
  }

  onModelUpdate(model: Partial<ConfigurationModel>) {
    this.model = {...this.model, ...model};
  }

}
