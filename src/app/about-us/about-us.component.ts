import { Component, OnInit } from '@angular/core';
declare var $: any;

import * as myjQuery from 'jquery';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit  {
  ngOnInit() {
    // $(document).ready(function() {
    //   alert('I am Called From jQuery');
    // });
   
  }


}


