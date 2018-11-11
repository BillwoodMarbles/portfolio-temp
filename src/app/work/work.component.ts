import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  public sites: any;

  constructor() {
    this.initSites();
  }

  private initSites(): void {
    this.sites = [
      {
        blockClass: 'blue',
        linkCopy: 'servicecore.com',
        thumbnail: 'assets/img/thumbnails/servicecore.jpg',
        tags: [
          'Angular', 'TypeScript', 'SASS', 'Bootstrap', 'Grunt'
        ],
        title: 'ServiceCore',
        url: 'https://www.servicecore.com/'
      },
      {
        blockClass: 'orange',
        linkCopy: 'motionatdadeland.com',
        thumbnail: 'assets/img/thumbnails/motion.jpg',
        tags: [
          'WordPress', 'Twig', 'jQuery', 'Gulp'
        ],
        title: 'Motion Apartments',
        url: 'https://motionatdadeland.com/'
      },
      {
        blockClass: 'blue',
        linkCopy: 'livesouthend.com',
        thumbnail: 'assets/img/thumbnails/southend.jpg',
        tags: [
          'WordPress', 'Twig', 'jQuery', 'Gulp'
        ],
        title: 'Bainbridge South End',
        url: 'https://livesouthend.com/'
      },
      {
        blockClass: 'orange',
        linkCopy: 'harrisonwall.in',
        thumbnail: 'assets/img/thumbnails/portfolio.jpg',
        tags: [
          'jQuery', 'Bootstrap', 'HTML5', 'CSS3'
        ],
        title: 'Portfolio',
        url: 'https://harrisonwallin.com/'
      }
    ];
  }

  ngOnInit() {
  }

}
