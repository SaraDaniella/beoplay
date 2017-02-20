$(document).ready(function(){
    $(".slidedown").click(function(){
        $(".modal-background").slideToggle(1000);

    });
});

$(document).ready(function() {
    setTimeout(function() {
        $(".modal-background").slideDown(1000);
	});
});