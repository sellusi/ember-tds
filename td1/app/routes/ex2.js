import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Services = EmberObject.extend({
  countActive:computed('services.@each.active',function () {
    return this.get('services').filterBy('active',true).length;
  }),
  sumActive:computed('services.@each.active',function () {
    let somme = 0;
    let prix = this.get('services').filterBy('active',true);
    prix.forEach(function (service) {
      somme += service.price;
    });
    return somme;
  }),
  txRemise:computed('promo',function () {
    let promo = this.get('promo');
    let promos = this.get('promos');
    if(promos[promo]){
      document.getElementById("remise").checked = true;
      return promos[promo];
    }
    else{
      document.getElementById("remise").checked = false;
    }
  }),
  prix:computed('sumActive','txRemise',function () {
    let total = this.get('sumActive');
    let remise = this.get('txRemise');
    if(remise != null && document.getElementById("remise").checked){
      return total - (total * remise);
    }
    else{
      return total;
    }
  })
});

export default Route.extend({
  model() {
    return Services.create({
      services: [
        {
          "name": "Web Development",
          "price": 300,
          "active":true
        },{
          "name": "Design",
          "price": 400,
          "active":false
        },{
          "name": "Integration",
          "price": 250,
          "active":false
        },{
          "name": "Formation",
          "price": 220,
          "active":false
        }
      ],
      promos:{
        "B22":0.05,
        "AZ":0.01,
        "UBOAT":0.02
      }
    });
  },
  actions:{
    toggleActive:function (service) {
      Ember.set(service,'active',!service.active);
    }
  }
});
