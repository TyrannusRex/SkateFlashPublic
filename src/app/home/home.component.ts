import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {

    currentRate = 3.15;

    // tslint:disable-next-line:variable-name
    event_list = [
        {
            event: ' Event 1',
            eventLocation: 'Bangalore',
            eventDescription: 'In bangalore, first event is going to happen. Please be careful about it',
            img: 'https://picsum.photos/900/500?random&t=1',
            eventStartDate: new Date('2019/05/20'),
            eventEndingDate: new Date('2019/05/24')
        },
        {
            event: ' Event 2',
            eventLocation: 'Dubai',
            eventDescription: 'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
            img: 'https://picsum.photos/900/500?random&t=3',
            eventStartDate: new Date('2019/07/28'),
            eventEndingDate: new Date('2019/07/30')
        },
        {
            event: ' Event 3',
            eventLocation: 'New York',
            eventDescription: 'NewYork sits on top of event hosting',
            img: 'https://picsum.photos/900/500?random&t=4',
            eventStartDate: new Date('2020/05/20'),
            eventEndingDate: new Date('2020/05/24')
        },
        {
            event: ' Event 4',
            eventLocation: 'Aprovecha nuestras ofertas este buen fin',
            eventDescription: 'Ofertas únicas del 15 al 18 de noviembre',
            img: 'https://cdn.forbes.com.mx/2019/11/buen-fin-e1573249984330-640x360.jpg',
            eventStartDate: new Date(),
            eventEndingDate: new Date()
        },
        {
            event: ' Event 5',
            eventLocation: 'Skateboard Element',
            eventDescription: 'Design board Blue',
            // tslint:disable-next-line:max-line-length
            img: 'https://images.unsplash.com/photo-1495361276969-f11591d57520?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80',
            eventStartDate: new Date(),
            eventEndingDate: new Date()
        },
        {
            event: ' Event 6',
            eventLocation: 'FADE SK8-HI PRO',
            eventDescription: 'The Fade Sk8-Hi Pro, a Vans classic upgraded for enhanced performance',
            // img: 'https://images.vans.com/is/image/Vans/5JDSWE-HERO?$583x583$',
            img: '../../assets/img/proximos/prox_amarillo1.png',
            eventStartDate: new Date(),
            eventEndingDate: new Date()
        },
        {
            event: ' Event 7',
            eventLocation: 'CHIMA PRO 2',
            eventDescription: 'DRESS BLUES/QUIET SHADE',
            // tslint:disable-next-line:max-line-length
            // img: 'https://images.vans.com/is/image/Vans/XSGY28-HERO?$583x583$',
            img: '../../assets/img/proximos/prox_negro1.jpg',
            eventStartDate: new Date(),
            eventEndingDate: new Date()
        },
        {
            event: ' Event 8',
            eventLocation: 'TWILL BERLE PRO',
            eventDescription: 'DRESS BLUES/PORTABELLA',
            // tslint:disable-next-line:max-line-length
            // img: 'https://images.vans.com/is/image/Vans/WKXUZ0-HERO?$583x583$',
            img: '../../assets/img/proximos/prox_azul1.jpg',
            eventStartDate: new Date(),
            eventEndingDate: new Date()
        },
    ];

    // tslint:disable-next-line:variable-name
    current_events = this.event_list.filter(event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())));

    logoProviders = [
        {
            id_provider: '01',
            name_provider: 'DC shoes',
            img: '../../assets/img/providers/DC.png',
            description: 'brand for shoes'
        },
        {
            id_provider: '02',
            name_provider: 'Bird House',
            img: '../../assets/img/providers/birdhouse.png',
            description: 'brand by Tony'
        },
        {
            id_provider: '03',
            name_provider: 'Converse',
            img: '../../assets/img/providers/converse.png',
            description: 'american brand'
        },
        {
            id_provider: '04',
            name_provider: 'Element',
            img: '../../assets/img/providers/element.png',
            description: 'american old brand'
        },
        {
            id_provider: '05',
            name_provider: 'Vans',
            img: '../../assets/img/providers/vans.png',
            description: 'american skate brand'
        }

    ];

    listBlog = [
        {
            id: 'blogX001',
            title: 'Elegir mi primer Longboard',
            img: '../../assets/img/blog/jamie-brown-Ayp1CZEouE0-unsplash.jpg',
            // tslint:disable-next-line:max-line-length
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit harum perspiciatis ratione aliquam rem voluptatem cupiditate ex aspernatur veniam soluta consectetur quos, placeat laudantium quaerat ullam temporibus! Possimus, ex aperiam.',
            date: '2019/11/12'
        },
        {
            id: 'blogX001',
            title: 'Tips para la foto perfecta',
            img: '../../assets/img/blog/jan-kopriva-7i2by8a0tK8-unsplash.jpg',
            // tslint:disable-next-line:max-line-length
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit harum perspiciatis ratione aliquam rem voluptatem cupiditate ex aspernatur veniam soluta consectetur quos, placeat laudantium quaerat ullam temporibus! Possimus, ex aperiam.',
            date: '2019/08/23'
        },
        {
            id: 'blogX001',
            title: 'Las promesas del Skate',
            img: '../../assets/img/blog/evan-dvorkin-cX59CpXo_-o-unsplash.jpg',
            // tslint:disable-next-line:max-line-length
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit harum perspiciatis ratione aliquam rem voluptatem cupiditate ex aspernatur veniam soluta consectetur quos, placeat laudantium quaerat ullam temporibus! Possimus, ex aperiam.',
            date: '2019/07/03'
        }
    ];


    listProducts = [
        {
            title: 'Tenis Alicia',
            img: '../../assets/img/promos/bert-ferranco-GR4EEDj6bAE-unsplash.jpg',
            description: 'lorem emene ede',
            rating: '4.5',
            price: '$1320.00'
        },
        {
            title: 'Blusa Vans Mujer',
            img: '../../assets/img/promos/ian-dooley-TT-ROxWj9nA-unsplash.jpg',
            description: 'lorem emene ede',
            rating: '3',
            price: '$300.00'
        },
        {
            title: 'Sudadera Mirror',
            img: '../../assets/img/promos/jay-mullings-iFPF95xh9WQ-unsplash.jpg',
            description: 'lorem emene ede',
            rating: '4.5',
            price: '$399.00'
        },
        {
            title: 'Long Skateboard M-31',
            img: '../../assets/img/promos/max-tarkhov-NG4684I8Bng-unsplash.jpg',
            description: 'lorem emene ede',
            rating: '5',
            price: '$650.00'
        },
        {
            title: 'Playera Vans Hombre',
            img: '../../assets/img/promos/anomaly-WWesmHEgXDs-unsplash.jpg',
            description: 'lorem emene ede',
            rating: '4.2',
            price: '$150.00'
        },
        {
            title: 'Skateboard Alien Element',
            img: '../../assets/img/promos/niket-nigde-9N3rS-xLfkI-unsplash.jpg',
            description: 'lorem emene ede',
            rating: '4.2',
            price: '$820.00'
        },
        {
            title: 'Long Skateboard Element',
            img: '../../assets/img/promos/h-ekd-7FjJLJOv4FM-unsplash.jpg',
            description: 'lorem emene ede',
            rating: '3.8',
            price: '$400.00'
        },
        {
            title: 'Vans Sk18',
            img: '../../assets/img/promos/kristian-egelund-vJgJLzWmXDA-unsplash.jpg',
            description: 'lorem emene ede',
            rating: '5',
            price: '$760.00'
        },
    ];

    constructor() { }

    ngOnInit() {}

    ngAfterViewInit(): void {
    }

}
