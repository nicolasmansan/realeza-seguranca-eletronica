import { Component } from '@angular/core';

@Component({
  selector: 'app-instragram-feed',
  imports: [],
  templateUrl: './instragram-feed.html',
  styleUrl: './instragram-feed.scss'
})
export class InstragramFeed {
  posts = [
    {
      url: 'https://www.instagram.com/p/DMFtAWMtmPr/',
      image: '/images/insta1.webp',
      alt: 'Publicação 1'
    },
    {
      url: 'https://www.instagram.com/p/DLzrce-IHO9/',
      image: '/images/insta2.webp',
      alt: 'Publicação 2'
    },
    {
      url: 'https://www.instagram.com/p/DL5Jld2pLXF/',
      image: '/images/insta3.webp',
      alt: 'Publicação 3'
    }
  ];
}
