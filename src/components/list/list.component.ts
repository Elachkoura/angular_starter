import { Component, OnInit, Input , OnChanges} from '@angular/core';
import { Person } from "../../models/person";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() ArrayPersons: Array<Person> = null;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
  }

}
