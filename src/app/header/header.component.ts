import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() clickedFeature = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onClick(feature: string) {
    this.clickedFeature.emit(feature);
  }
}
