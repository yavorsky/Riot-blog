module.exports = request = {
  get: function (url) {
    return fetch(url).then(function (response) {
      return response.json();
    });
  },
  post: function (url, data) {
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
}
