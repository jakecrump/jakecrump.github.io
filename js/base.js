



itemWatch = [];

var $work = $('.work-item');

$work.each(function(i,obj){

	itemWatch[i] = scrollMonitor.create($work.eq(i), {top:-200, bottom:-200});

	itemWatch[i].enterViewport(function(){
		$work.eq(i).addClass('show');
	});
	itemWatch[i].exitViewport(function(){
		$work.eq(i).removeClass('show');
	});
});
