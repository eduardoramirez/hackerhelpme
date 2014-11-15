var fb = new Firebase('https://hacknighthelpme.firebaseio.com');

var users = [];

function newHelp(name, location, field){
  if(name && location && field) {
    var newHelpRef = fb.push({'user': name, 'location':location, 'field': field});
    users.push({user: name, loc: newHelpRef});
  }
};

function displayQueue(userinfo){

  var length = userinfo.length;
  var row = '';
  for(var i = 0; i < length; i++){
    row = '<td>' + userinfo[i] + '</td>' + row;
  }

  $('#queueTable tbody').append('<tr>' + row + '</tr>');
};

function displayQueueMentors(userinfo){


  var length = userinfo.length;
  var row = '';
  for(var i = 0; i < length; i++){
    row = '<td>' + userinfo[i] + '</td>' + row;
  }
  
  var del = "<div class='rem'> <input type='hidden' value='"+ userinfo[2]+"' /> </div>"

  row = row + "<td>" + del + "</td>"; 

  $('#queueTable tbody').append('<tr>' + row + '</tr>');
};

function removeUser(user){
alert("hello");

  var length = user.length;
  for(var i = 0;  i < length; i++) {
    if(u[i].user = user) {
      u[i].loc.remove();
      users.splice(i, 1);
      break;
    }
  }
};

