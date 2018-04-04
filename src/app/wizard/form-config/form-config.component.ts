import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-config',
  templateUrl: './form-config.component.html',
  styleUrls: ['./form-config.component.css']
})
export class FormConfigComponent implements OnInit {

    model: Partial<ConfigurationModel> = {
        username: 'piotrl',
        template: '#github-profile-demo'
    };

  constructor() { }

  ngOnInit() {
  }

}
