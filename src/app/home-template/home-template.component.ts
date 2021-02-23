import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
declare var require: any;

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.scss']
})
export class HomeTemplateComponent implements OnInit {
  // Side Nav
  public isMenuOpen: boolean = false;

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  
  // Icons
  faTwitter = faTwitter
  faInstagram = faInstagram
  faLinkedinIn = faLinkedinIn

  // AirTable API
  Airtable = require('airtable');
  base = new this.Airtable({apiKey: 'keyvOSzcyYqwMu5vI'}).base('appqgvkmjbRZELjEh');
  
  // AirTable CMS Values
  titleContent: any;
  aboutContent: any;

  async getAirTableContent() {
    let totalRecords: any = []
    await this.base('Table 1').select({
      // Selecting the first 6 records in Grid view:
      maxRecords: 6,
      view: "Grid view"
      }).eachPage((records: any, fetchNextPage: any) => {
          // This function (`page`) will get called for each page of records.
          records.forEach((record: any) => {
            totalRecords.push(record.fields);
            if (record.fields.Section == "Title") {
              this.titleContent = record.fields.Content
            }
            if (record.fields.Section == "About") {
              this.aboutContent = record.fields.Content
            }
          });
          // console.log(totalRecords);
          // titleContent = totalRecords
          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
          // console.log(totalRecords)
        }, function done(err: any) {
          if (err) { console.error(err); return; }
        });
  }

  constructor() {}

  ngOnInit(): void {
    this.getAirTableContent()
  }
}
