import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title;

  private counter: number;

  private interval: any;

  constructor() {
    this.counter = 0;
    this.title = 'harrison';
  }

  private changeTitle(): void {
    this.title = this.title === 'harrison' ? 'engineer' : 'harrison';
    this.updateCounter();
  }

  private start() {
    this.interval = setInterval(this.changeTitle.bind(this), 5000);
  }

  private updateCounter(): void {
    this.counter++;
  }

  ngOnInit() {
    this.start();
  }

}
