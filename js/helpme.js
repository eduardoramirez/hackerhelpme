var fb = new Firebase('https://hacknighthelpme.firebaseio.com');

var users = [];


function newHelp(name, location, field){

  alert("new");
  if(name && location && field) {
    var newHelpRef = fb.push({'user': name, 'location':location, 'field': field});
    users.push({user: name, loc: newHelpRef});
  }
};


function getEveryone(){
  alert("hellosdfshw");
  var userinfo = [];
  fb.on('child_added', function(help){
    userinfo = [];
    help.forEach(function(useritem){
      userinfo.push(useritem.val());
    });
 alert("hfshw");
    displayQueue(userinfo);
  });
};

function displayQueue(userinfo){

        alert("noooe");
  var row = '<tr>';
  for(var infoitem in userinfo){
    row += '<td>' + text + '</td>';
  }

  row = '</tr>';

  $('#queueTable tbody').append(row);
};


function removeUser(user){
  var length = user.length;
  for(var i = 0;  i < length; i++) {
    if(u[i].user = user) {
      u[i].loc.remove();
      users.splice(i, 1);
      break;
    }
  }
};

