
/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
 
  openDetails() {
    this.navCtrl.push('FilmDetailsPage');
  }
 
  goToPlanets() {
    this.navCtrl.parent.select(2);
  }
}