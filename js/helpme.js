var fb = new Firebase('https://hacknighthelpme.firebaseio.com');


function newHelp(name, location, field){

  if(name && location && field) {
    var newHelpRef = fb.push({'user': name, 'location':location, 'field': field});
  }
};


function getEveryone(){
  var userinfo = [];
  fb.on('child_added', function(help){
    userinfo = [];
    help.forEach(function(useritem){
      userinfo.push(useritem.val());
    });

    displayQueue(userinfo);
  });
};

function displayQueue(userinfo){
  var row = '<tr>';
  for(var infoitem in userinfo){
    row += '<td>' + text + '</td>';
  }

  row = '</tr>';

  $('#quotesTable tbody').append(row);
};


function removeUser(){

};