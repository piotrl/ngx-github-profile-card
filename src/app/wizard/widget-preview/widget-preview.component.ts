import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-widget-preview',
  templateUrl: './widget-preview.component.html',
  styleUrls: ['./widget-preview.component.css']
})
export class WidgetPreviewComponent implements OnInit, OnChanges {

    @Input()
    username: string;

    widget: GitHubCard;

  constructor() { }

  ngOnInit() {
      this.updateUsername();
  }

    private updateUsername() {
        this.widget = new GitHubCard({
            template: '#github-card-demo',
            username: this.username
        });
        this.widget.init();
    }

    ngOnChanges(changes: SimpleChanges): void {
      if (this.widget === undefined) {
          return;
      }
      console.log(changes.username.currentValue);
      // this.updateUsername();
    }

}
