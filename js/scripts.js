// Back-end logic goes here

var twitchUsers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function  displayUser(user) {
  $.get('https://wind-bow.glitch.me/twitch-api/streams/' + user, function(response) {
    if (response.stream) {
      $(".twitch-listings").append("<div class='listing-active'><a href='" + response.stream.channel.url + "'><img src='" + response.stream.channel.logo + "' class='listing-icon' alt='twitch user avatar'><span class='listing-name'>" + user + "</span><span class='listing-status online'>" + response.stream.game + "</span></a></div>");
    } else {
      $(".twitch-listings").append("<div class='listing'><a href='" + response._links.channel + "'><img src='https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png' class='listing-icon' alt='twitch user avatar'><span class='listing-name'>" + user + "</span><span class='listing-status online'><em>Offline</em></span></a></div>");
    }
  });
}

function displayAll() {
  for (var i = 0; i < twitchUsers.length; i++) {
    displayUser(twitchUsers[i]);
  }
}

// Front-end logic goes here

$(document).ready(function() {

  displayAll();

  $(".twitch-all").click(function() {
    $(".listing").show();
    $(".listing-active").show();
  })

  $(".twitch-online").click(function() {
    $(".listing").hide();
    $(".listing-active").show();
  })

  $(".twitch-offline").click(function() {
    $(".listing").show();
    $(".listing-active").hide();
  })

})
