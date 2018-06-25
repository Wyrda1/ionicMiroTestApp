import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {

  testVar: string="Hallo Welt";

  people: Observable<any>;
  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) { 
    this.people = this.apiProvider.getPeople();
  }
 
  openDetails(people) {
    this.navCtrl.push('PeopleDetailsPage', {people: people});
  }

  /*openDetails() {
    this.navCtrl.push('PeopleDetailsPage');
  } */


}
