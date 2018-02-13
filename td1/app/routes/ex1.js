import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Note = EmberObject.extend({
  size:computed('content', function () {
    let content = this.get('content');
    if(content)
      this.set('info','Note modifiée')
    let MAX = this.get('MAX');
    return MAX-content.length;
  }),

  style:computed('size', function () {
    let size = this.get('size');
    let style = 'info';
    if(size<50)
      style = 'warning';
    if(size<20)
      style = 'danger';
    return style;
  }),
  alertVisible:computed('size', function () {
    let size = this.get('size');
    if(size == 100)
      return false;
    else
      return true;
  })
});

export default Route.extend({
  model(){
    return Note.create({
      content:'',
      MAX:100
    });
  }
},{
  actions:{
    clear: function(model){
      model.set('content','');
    },

    save:function (model) {
      model.set('info',`Note sauvegardée : <b>${model.get('content')}</b>`);
    }
  }
});
