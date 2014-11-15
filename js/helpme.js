var fb = new Firebase('https://hacknighthelpme.firebaseio.com');

var users = [];

$("submit").click(function(){
  var name = $('#name').val();
  var location = $('#location').val();

  var field = '';

  for(var i = 0; i < 6; i++)
  {
    if($('#checkbox'+i.toString()).is(':checked')){
      field += $('#checkbox'+i.toString()).val() + ' ';
    }
  }

  newHelp(name, location, field);

});

function newHelp(name, location, field){

  if(name && location && field) {
    var newHelpRef = fb.push({'user': name, 'location':location, 'field': field});
    users.push({user: name, loc: newHelpRef});
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


function removeUser(user){

};