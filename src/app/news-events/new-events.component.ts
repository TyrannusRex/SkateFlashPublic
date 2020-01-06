import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-news-events',
    templateUrl: './new-events.component.html',
    styleUrls: ['./new-events.component.css']
})

export class NewEventsComponent implements OnInit {
    listNews = [
        {
            id_new: '01',
            date: '06/01/2020',
            img: '../../assets/img/news/Olympic_5ae3d9fa3c652.jpg',
            title: 'Skateboarding’s ‘Anti-Olympics’',
            description: 'For amateurs and professionals, this annual event captures the spirit of the sport ahead of its debut at the 2020 Tokyo games.',
            autor: 'MATT RUBY, GEORGE ETHEREDGE and VICTOR LLORENTE'
        },
        {
            id_new: '02',
            date: '14/09/2019',
            img: '../../assets/img/news/15LAAR-SkatersL-mediumThreeByTwo210-v2.jpg',
            title: 'What the Skateboarders Are Wearing at the LES Skate Park',
            description: 'An asphalt expanse under the Manhattan Bridge is still a place to flex your skate moves and your style.',
            autor: 'JOHN ORTVED'
        },
        {
            id_new: '03',
            date: '20/08/2019',
            img: '../../assets/img/news/01mag-jones-02-mediumThreeByTwo210.jpg',
            title: 'New York City’s First Skateboarding Superstar',
            description: 'Tyshawn Jones’s jaw-dropping athleticism has made him an icon. But is skateboarding big enough for someone like Tyshawn Jones?.',
            autor: 'WILLY STALEY'
        },
        {
            id_new: '04',
            date: '02/08/2019',
            img: '../../assets/img/news/00concreteparks-mediumThreeByTwo210.jpg',
            title: 'The Battle for Tompkins Square Park: Skateboarders vs. Artificial Turf',
            description: 'For decades, New Yorkers have skated on asphalt in the East Village spot. Now the Parks Department may cover it with artificial turf.',
            autor: 'ANDREA SALCEDO and NEFERTARI ELSHIEKH'
        },
        {
            id_new: '05',
            date: '13/07/2019',
            img: '../../assets/img/news/Screen-Shot-2019-06-13-at-2-1.49.19-PM.jpg',
            title: 'adidas x Nora Vasconcellos Unisex Collection',
            description: 'adidas Skateboarding and Nora Vasconcellos come together to debut the skateboarder’s first unisex apparel and footwear collection.',
            autor: 'KAREN COLGAN'
        },
        {
            id_new: '06',
            date: '01/07/2019',
            img: '../../assets/img/news/05warped1-mediumThreeByTwo210.jpg',
            title: 'R.I.P. Warped Tour. At Least We Still Have Vans.',
            description: 'The skater company says goodbye to the music festival that made it cool.',
            autor: 'MEDEA GIORDANO'
        },
        {
            id_new: '07',
            date: '14/06/2019',
            img: '../../assets/img/news/4502fab7cb0e455392bfb1817ffe65bb-mediumThreeByTwo210.jpg',
            title: 'Children’s Safety on Wheels',
            description: 'On bikes and scooters, “the best way to prevent an injury is to wear a helmet, and children need to follow the rules of the road,” an expert says.',
            autor: 'PERRI KLASS, M.D.'
        }

    ];
    constructor() {}
    ngOnInit() {}
}
