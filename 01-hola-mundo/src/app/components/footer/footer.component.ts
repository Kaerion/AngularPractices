import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() {
    this.year = new Date().getFullYear();
  }
  year: number;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
