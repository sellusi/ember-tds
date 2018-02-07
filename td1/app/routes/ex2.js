import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import Ember from 'ember';

const Services=EmberObject.extend({
  countActive:Ember.computed('sevices.@each.active',function(){
      return this.get('services').filterBy('count',true).length;
  })
})

export default Route.extend({
  model(){
    return Services.create({services:[
        {
          "name":"Web Development",
          "price":300,
          "active":false
        },{
          "name":"Design",
          "price":400,
          "active":false
        },{
          "name":"Formation",
          "price":220,
          "active":false
        }
      ]})
  },
  actions:{
    toggleActive:function(service){

    }
  }


});
