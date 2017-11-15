import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    books = [
        {
            isbn: '978-1885167774',
            title: 'One Thing',
            publish: { datePublished: '4/1/13', publisherName: 'Bard Press' },
            price: 15.35,
            author: 'Garry Keller, Jay Papasan',
            imageSrc: '1.jpg'
        },
        {
            isbn: '978-0399169472',
            title: 'The Happiness Equation',
            publish: { datePublished: '3/8/16', publisherName: 'G.P. Putnam\'s Sons' },
            price: 16.99,
            author: 'Neil Pasricha',
            imageSrc: '2.jpg'
        },
        {
            isbn: '978-1451612592',
            title: 'How to Win Friends and Influence People',
            publish: { datePublished: '12/25/12', publisherName: 'Simon & Schuster' },
            price: 10.23,
            author: 'Dale Carnegie',
            imageSrc: '3.jpg'
        },
        {
            isbn: '978-1934356340',
            title: 'The Passionate Programmer',
            publish: { datePublished: '6/7/09', publisherName: 'Pragmatic Bookshelf' },
            price: 13.89,
            author: 'Chad Fowler',
            imageSrc: '4.jpg'
        },
    ];

}