import { Component, OnInit } from '@angular/core';
import { PersonsService } from "../../providers/persons/persons.service";
import { Person } from "../../models/person";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public personsList: Array<Person>;
  public genericError: string = null;
  
  constructor(private personsService: PersonsService) {
  }

  ngOnInit() {
    this.getListOfPersons();
  }

  public getListOfPersons() {
    this.personsService.getListPersons().then(personsList => {
      this.personsList = personsList;
    }).catch(error => {
      this.genericError = error;
      // Handle error gently
    })
  }
}
