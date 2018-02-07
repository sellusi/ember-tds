QUnit.module('ESLint | app');

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('helpers/plural.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'helpers/plural.js should pass ESLint\n\n');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'router.js should pass ESLint\n\n');
});

QUnit.test('routes/ex1.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/ex1.js should pass ESLint\n\n');
});

QUnit.test('routes/ex2.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/ex2.js should pass ESLint\n\n6:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n30:27 - \'service\' is defined but never used. (no-unused-vars)');
});

