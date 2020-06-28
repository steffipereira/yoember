import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class FizzbuzzController extends Controller {
  showNumbers = false;

  get numbers() {
    return Array.from({length: 50}, (_, index) => index + 1);
  }

  @action
  fizzbuzz() {
    //debugger;
    this.toggleProperty('showNumbers');

  }
}
