import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | painting-game/play', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:painting-game/play');
    assert.ok(controller);
  });
});
