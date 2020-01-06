import {Component, OnInit } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';
import * as  $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component..html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    constructor() {}
    ngOnInit() {
        this.onScrollNav();
    }

    onScrollNav() {
        // tslint:disable-next-line:only-arrow-functions
        $(window).scroll(function() {
            if ($('#menu').offset().top > 56) {
                $('menu').removeClass('bg-init');
                $('#menu').removeClass('navbar-dark');
                $('#menu').addClass('bg-scroll');
                $('#menu').addClass('navbar-light');
            } else {
                $('#menu').removeClass('bg-scroll');
                $('#menu').removeClass('navbar-light');
                $('#menu').addClass('bg-init');
                $('#menu').addClass('navbar-dark');
            }
          });
    }
}
