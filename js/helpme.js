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
  
  var del = "<div class='rem'>Remove <input type='hidden' value='"+ userinfo[2]+"' /> </div>"

  row = row + "<td>" + del + "</td>"; 

  $('#queueTable tbody').append('<tr>' + row + '</tr>');
};

function removeUser(user) {
  fb.on('child_added', function(help){
    if(help.forEach(function(useritem){
        if(useritem.val() == user) {
          return true;
        }
      })){
      help.ref().remove();
    }
  });
};



