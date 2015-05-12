$(document).ready(function() {

  var os = require("os");
  var async = require("async");

  async.forEach(Object.keys(os), function (key, callback) {
    $('.os').append('<p><b>' + key + ':</b> ' + JSON.stringify(os[key]()) + '<p/>');
  });

});
