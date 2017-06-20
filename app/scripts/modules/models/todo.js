var app=app || {};

//todo model
//has two attributes title and completed

app.Todo=Backbone.Model.extend({
  //Defaults attributes ensure that each todo model has title and completed status.
  defaults:{
    title:'',
    completed:false
  },

  //toggle the completed state of todo model
  toggle:function(){
    this.save({completed:!this.get('completed')})
  }
});
