

/**
 * Generated class for the FilmDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-film-details',
  templateUrl: 'film-details.html',
})
export class FilmDetailsPage {
  filmId = null;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filmId = this.navParams.get('filmId');
  }
 
  goBack() {
    this.navCtrl.pop();
  }

  someFunction() {
    
  }
 
}
