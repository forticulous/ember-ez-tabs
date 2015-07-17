import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('ez-tab', 'Unit | Component | ez tab', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Creates the component instance
  var component = this.subject();
  // Renders the component to the page
  this.render();
  assert.equal(this.$().text(), '');
});
