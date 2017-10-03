var Locked = true

function openLock() {
	if (Locked) {
		$('#lockCore').attr('class','open');
		Locked = false
		showRibbon()
	} else {
		// Reset()
		// $('#ribbon').stop();
		// $('#ribbon').slideUp(800);
		console.log('dont do anything')
	}
}
function showRibbon(){
	$('#ribbon').delay(200).slideDown("slow")
	hideRibbon()
}
function hideRibbon (){
	$('#ribbon').delay(2000).slideUp(800)
	timeoutID = window.setTimeout(Reset, 3000);
}
function Reset(){
	$('#lockCore').attr('class','core')
	timeoutID = window.setTimeout(TakeABreak, 1500);
}
function TakeABreak(){
	Locked = true
}


function goHome() {
	window.location = 'index.html'
}
function startLearning() {
	window.location = 'resources.html'
}
function startPlanning() {
	window.location = 'contact.html'
}
function meetDavid() {
	window.location = 'about.html'
}


$(function() {

    var $sidebar   = $("#sidebar"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 20;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });
    
});

$('#logo').click(goHome)
$('#lockCore').click(openLock)
$('#startLearning').click(startLearning)
$('#startPlanning').click(startPlanning)
$('#meetDavid').click(meetDavid)





