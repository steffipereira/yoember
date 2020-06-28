import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | painting-game/design', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:painting-game/design');
    assert.ok(route);
  });
});
