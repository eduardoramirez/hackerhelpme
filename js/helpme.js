var fb = new Firebase('https://hacknighthelpme.firebaseio.com');

var countOdd1 = 0;

var countOdd = 0;

function newHelp(name, location, field){
  if(name && location && field) {
    var newHelpRef = fb.push({'user': name, 'location':location, 'field': field});  
  }
};

function displayQueue(userinfo){
  var curRow = "row" + countOdd.toString();

  var length = userinfo.length;
  var row = '';
  for(var i = 0; i < length; i++){
    row = '<td>' + userinfo[i] + '</td>' + row;
  }

  $('#queueTable tbody').append('<tr id='+curRow+'>' + row + '</tr>');

  if(!countOdd)
    countOdd++;
  else{
    odds(curRow);
    countOdd--;
  }
};

function updateQueue(){

  fb.on('value', function(help){
    var userinfo = [];
    help.forEach(function(useritem){
      userinfo.push(useritem.val());
    });

    displayQueue(userinfo);
  });
};

function displayQueueMentors(userinfo){
  var curRow = "row" + countOdd1.toString();

  var length = userinfo.length;
  var row = '';
  for(var i = 0; i < length; i++){
    row = '<td>' + userinfo[i] + '</td>' + row;
  }
  
  var uname = userinfo[2].replace(/(["])/g, "").replace(/(['])/g, "");

  var del = "<div class='rem'>Remove <input type='hidden' value='"+ uname +"' /> </div>";

  row = row + "<td>" + del + "</td>"; 

  $('#queueTable tbody').append('<tr id='+curRow+'>' + row + '</tr>');

  if(!countOdd1)
    countOdd1++;
  else{
    odds(curRow);
    countOdd1--;
  }
};

function removeUser(user) {
  fb.on('child_added', function(help){
    if(help.forEach(function(useritem){
        var userDB = useritem.val().replace(/(["])/g, "").replace(/(['])/g, "");
        if(userDB == user) {
          return true;
        }
      })){
      help.ref().remove();
    }
  });
};

function odds(row) {
  $('#'+row).css("background-color", "#ecf0f1");
};

