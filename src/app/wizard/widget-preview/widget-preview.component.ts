import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-preview',
  templateUrl: './widget-preview.component.html',
  styleUrls: ['./widget-preview.component.css']
})
export class WidgetPreviewComponent implements OnInit {

    @Input()
    username: string;

  constructor() { }

  ngOnInit() {
      const widget = new GitHubCard({
          template: '#github-card-demo',
          username: this.username
      });
      widget.init();
  }

}
