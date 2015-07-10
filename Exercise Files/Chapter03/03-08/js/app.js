App = Ember.Application.create();

App.Router.map(function() {
  this.route("artist");
});

App.ArtistRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        artist: "Avery Washington",
        work: "Abstractionist Works"
      }, {
        artist: "Paul Shellington",
        work: "Bird Watching"
      }, {
        artist: "Jacob Mars",
        work: "General Works"
      }
    ];
  }
});

App.ArtistInfoComponent = Ember.Component.extend({
  tagName: "li",
  classNames: "artistList"
});