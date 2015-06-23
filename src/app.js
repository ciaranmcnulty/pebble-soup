/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');

var card = new UI.Card({
  title: 'Soup Finder',
  body: 'Loading...'
});

card.show();

ajax(
  {
    url: 'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D\'http%3A%2F%2Fwhatsoupisittoday.com\'%20and%20xpath%3D%22%2F%2Fdiv%5B%40id%3D\'container\'%5D%2F%2Fdiv%22&format=json'
    , type: 'json'
  },
  function(data, status, request) {
    console.log('Loaded ok');
    console.log(data);
    
    var loaded = new UI.Card({
      title: 'Soup Finder',
      body: data.query.results.div[0].content.split('♨').join("\n")
    });

    loaded.show();
  },
  function(error, status, request) {
    console.log('The ajax request failed: ' + error);
    
    new UI.Card({
      title: 'Soup Finder',
      body: 'Error Loading Soups!'
    }).show();
  }
);


console.log('done');