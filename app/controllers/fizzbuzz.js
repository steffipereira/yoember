import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';

export default class FizzbuzzController extends Controller {
  arr = Array(20).fill().map((_, index) => index + 1);
  @tracked num;
  @tracked numArr = [];
  @tracked newStr = '';

  @action
  fizzbuzz() {
    let timeout = 1000 ;
    this.arr.forEach(el => {
      if( el%15 === 0 ){
        el = htmlSafe(`<span class="text-info">Fizzbuzz</span><em>(${el})</em>`)
      }
      if( el%5 === 0 ){
        el = htmlSafe(`<span class="text-success">Buzz</span><em>(${el})</em>`)
      }
      if( el%3 === 0 ){
        el = htmlSafe(`<span class="text-danger">Fizz</span><em>(${el})</em>`)
      }
      setTimeout(() => {
        // debugger;
        this.num = el;
        this.numArr.pushObject(el);

      }, timeout);
      timeout += 1000;

    })

  }
}
