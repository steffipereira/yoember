import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminCategoriesController extends Controller {
  @action
  addNewCategory(name) {
    return this.store.createRecord('category', {name}).save();
  }

  @action
  editCategory(category) {
    category.set('isEditing', true);
  }

  @action
  async updateCategory(category) {
     await category.save();
     category.set('isEditing', false)
  }

  @action
  deleteCategory(category) {
    return category.destroyRecord();
  }

}
