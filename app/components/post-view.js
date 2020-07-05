import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PostViewComponent extends Component {
  @tracked newText;
  @service router;
  @service store;

  @action
  async deletePost(post) {
    await post.destroyRecord();
    this.router.transitionTo('/posts');
  }

  @action
   addComment(e) {
     e.preventDefault();
     debugger;
    const comment = this.store.createRecord('comment', {
      text: this.newText,
      createdAt: new Date(),
      post: this.model,
    });
    this.model.pushObject(comment);
    comment.save()
    this.newText= '';
  }

}
