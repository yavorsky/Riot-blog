request = require('lib/request')

module.exports = store = Exim.createStore({
  actions: ['start', 'fetch', 'add', 'test'],

  getInitial: function () {
    return {
      posts: []
    }
  },

  fetch: {
    on: function () {
      return request.get('posts');
    },
    did: function (posts) {
      this.update('posts', posts);
    }
  },

  add: {
    will: function (data) {
      this.update('posts', this.get('posts').concat(data))
    },
    on: function (data) {
      return request.post('posts', data)
    },
    didNot: function (data) {
      posts = this.get('posts').filter(function (post) {
        return post.date !== data.date
      });
      this.update('posts', posts);
    }
  },

  start: function () {
    require('./app')
    require('./posts')
    riot.mount('app')
  }
})
