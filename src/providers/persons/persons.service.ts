import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { Person } from "../../models/person";
import { Errors } from "../../enums/errors";

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private networkService: NetworkService) { }
  
  public getListPersons(): Promise<Array<Person>> {
    /*    return this.networkService.get('/persons').then(data => {*/
    return this.networkService.get('persons.json').then(persons => {
      if(persons) {
        const Arraypersons = this._mapPersonsToJson(persons);
        return Promise.resolve(Arraypersons);
      } else {
        return Promise.reject(Errors.NOT_FOUND);
      }
    });
  }

  public _mapPersonsToJson (arrayPersons) {
    const arraypersons = [];

    arrayPersons.map(data => {
      const person = new Person();

      person.firstname = data['firstname'];
      person.lastname = data['lastname'];
      person.age = data['age'];

      arraypersons.push(person);
    });

    return arraypersons;
  }
}
