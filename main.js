$(document).ready(function() {
    var plinks = [
		{
            name: 'Stars cant shine without darkness',
            plink: 'https://www.youtube.com/watch?v=hSlb1ezRqfA'
       },       
	   {
            name: 'Stars cant shine without darkness',
            plink: 'https://www.youtube.com/watch?v=hSlb1ezRqfA'
        },
		];    
	
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '" target="_blank">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' - ')
        }
    }
    $('#marquee').marquee({
        duration: 7000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })

	window.SetVolume = function(val)
	{
    var player = document.getElementById('video');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
	}
	
	});
