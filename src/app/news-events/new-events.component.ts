import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-news-events',
    templateUrl: './new-events.component.html',
    styleUrls: ['./new-events.component.css']
})

export class NewEventsComponent implements OnInit {

    listevents = [
        {
            date: '03/Feb/2020',
            flayer: '../../assets/img/news/events/The-Bay-FLYER-SFAC-Tour-Stop-7-1-1.jpg',
            name: 'SKATE FOR A CAUSE',
            address: 'Rapid City Skatepark, 209 New York St',
            tickets: 'www.ticketmaster.com.mx/arrancones-nocturnos-mexico-01-02-2020/event/140057837A9F12F7'
        },
        {
            date: '15/Mar/2020',
            flayer: '../../assets/img/news/events/clashatClairemontFest104_defrT.png',
            name: 'CLASH AT CLAIREMONT',
            address: '3401 Clairemont Drive, San Diego, 92117',
            tickets: 'www.ticketmaster.com.mx/arrancones-nocturnos-mexico-01-02-2020/event/140057837A9F12F7'
        },
        {
            date: '21/Sep/2020',
            flayer: '../../assets/img/news/events/CORNERSTONE_SocialKV-SK8Liborius1.png',
            name: 'RED BULL CORNER STONE',
            address: 'St. Loius, MO',
            tickets: 'www.ticketmaster.com.mx/arrancones-nocturnos-mexico-01-02-2020/event/140057837A9F12F7'
        }
    ];
    listTopNews = [
        {
            id_new: '12',
            date: '24/10/2019',
            img: '../../assets/img/news/26sporting-mediumThreeByTwo210.jpg',
            title: 'How Skateboarding Helped Me Cope With War',
            description: 'To relieve the stress of military service in Iraq, a Marine welcomed the distraction of riding her cheap board.',
            autor: 'TERESA FAZIO'
        },
        {
            id_new: '21',
            date: '12/03/2012',
            img: '../../assets/img/news/10LIST1-mediumThreeByTwo210.jpg',
            title: 'What Skateboard Champion Nyjah Huston Likes to Wear',
            description: 'The X Games gold medalist likes skinny jeans, leather jackets and purple bracelets',
            autor: 'BEE SHAPIRO'
        },
        {
            id_new: '24',
            date: '27/09/2018',
            img: '../../assets/img/news/07THELOOK1-superJumbo.jpg',
            title: 'A Place for Us to Skate',
            description: 'Unity is a queer skateboarding collective in California, designed as a haven from the sometimes-hostile environment the sport has fostered.',
            autor: 'RYAN SHOROSKY, NICOLA FUMO and EVE LYONS'
        },
        {
            id_new: '24',
            date: '30/08/2019',
            img: '../../assets/img/news/02ANDERSON3-WEB-superJumbo.jpg',
            title: 'Brian Anderson, Skateboarding Star, Comes...',
            description: 'Mr. Anderson, 40, becomes the most prominent professional athlete to come out as gay in a sport once considered tinged with homophobia.',
            autor: 'CONOR DOUGHERTY'
        },
        {
            id_new: '24',
            date: '18/11/2019',
            img: '../../assets/img/news/31FIT-CITY-slide-JH20-superJumbo.jpg',
            title: 'Sisterhood of the Skateboard',
            description: 'In New York City, the Brujas, a crew of female skateboarders, are challenging the sport’s culture and using it as a tool for community activism.',
            autor: 'NOAH REMNICK'
        }
    ];
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
