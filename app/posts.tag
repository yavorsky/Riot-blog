<posts>

  <ul>
    <li each={ items }>
      <h3>{ title }</h3>
      <span>{ body }</span>
    </li>
  </ul>

  <form onsubmit={ add }>
    <input placeholder="Title" onkeyup={ editTitle }>
    <textarea placeholder="Text" onkeyup={ editBody }></textarea>
    <button disabled={ !body || !title }>Send</button>
  </form>

  var self = this
  self.disabled = true
  self.items = []

  self.on('mount', function() {
    store.actions.fetch()
  })

  //View updates after store.
  store.listen(function (data) {
    self.items = data.posts
    self.update()
  })

  editTitle(e) {
    self.title = e.target.value
  }

  editBody(e) {
    self.body = e.target.value
  }

  add(e) {
    if (self.body && self.title) {
      //Run action connected with store.
      store.actions.add({ body: self.body, title: self.title, date: new Date() })
      self.title = self.body = self.body.value = ''
    }
  }

</posts>
