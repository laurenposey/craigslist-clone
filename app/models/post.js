import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  image: DS.attr(),
  contactInfo: DS.attr(),
  location: DS.attr(),
  title: DS.attr()
});
