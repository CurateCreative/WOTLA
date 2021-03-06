
function animatebodymovin(duration, animObject) {
	
	var scrollPosition = theWindow.scrollTop();
	var maxFrames = animObject.totalFrames;
	var frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
	
	animObject.goToAndStop(frame, true);
	
}

   var anim;
    var elem = document.getElementById('bodymovin')
    var animData = {
        container: elem,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false,
            preserveAspectRatio: 'xMidYMid slice'
        },
        path: 'data.json'
    };
    anim = bodymovin.loadAnimation(animData);

    $(window).scroll(function() {

        // calculate the percentage the user has scrolled down the page
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

      
        console.log(anim.currentRawFrame);
     
        scrollPercentRounded = Math.round(scrollPercent);
       
        /*console.log( (scrollPercentRounded / 100) * anim.totalFrames );*/

        anim.goToAndStop( (scrollPercentRounded / 100) * 4000)
    });

