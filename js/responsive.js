$(document).ready(function() {
	var width = $(window).width();
	if (width < 480) {
        $(".menu").hide();
        $('#THEFORM').width(width).css({'padding-left':'17px', 'padding-right':'17px'});
        $('#queueTable').width(width);
    }
    $(window).resize(function() {
    	width = $(window).width();
        if (width < 480) {
            $(".menu").hide();
            $('#THEFORM').width(width).css({'padding':'0 17px 0 17px'});
            $('#queueTable').width(width);
        }
        else{
            $(".menu").show();
            $('#THEFORM').width(500).css({'padding-left':'0px', 'padding-right':'0px'});
            $('#queueTable').width(600);
        }
    });
});