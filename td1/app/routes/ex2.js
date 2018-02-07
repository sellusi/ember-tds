import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';
import { notEmpty } from '@ember/object/computed';

const Service = EmberObject.extend({
  countActive:Ember.computed('services.@each.active',
    function(){
      return this.get('services').filterBy('active',true).length;
    }),

  sumActive:Ember.computed('services.$each.active',
    function(){
      let total = 0;
      let services=this.get('services').filterBy('active',true);
      services.forEach(service=>{total += service.price;})
      return total;
    }),
  txRemise:Ember.computed('promo',function(){
    let promo = this.get('promo');
    let promos = this.get('promos');
    return promos[promo] || ' ';
  })
})
export default Route.extend({
  model() {
    return Service.create({
      services: [
        {
          "name": "Web Development",
          "price": 300,
          "active": true
        }, {
          "name": "Design",
          "price": 400,
          "active": false
        }, {
          "name": "Integration",
          "price": 250,
          "active": false
        }, {
          "name": "Formation",
          "price": 220,
          "active": false
        }

      ],
      promos: [
        {
          "B22": 0.05,
          "AZ": 0.01,
          "UBOAT": 0.02
        }
      ]
    });
  },
  actions: {
    toggleActive: function (service) {
      Ember.set(service,"active", !service.active);
    }
  }
});
