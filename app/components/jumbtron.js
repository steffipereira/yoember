import Component from '@glimmer/component';
import { action }  from '@ember/object';

export default class JumbtronComponent extends Component {

  @action
  submitEmail() {
    alert(`saving email address ${this.emailAddress}`);
  }
}
