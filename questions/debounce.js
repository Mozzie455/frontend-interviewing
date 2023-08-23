// Implement debounce

function debounce(fn, time){
	return function(){
		if (setTimeoutId){
			clearTimeout(setTimeoutId);
		}
		setTimeoutId = setTimeout(() => {
			fn.apply(this, arguments);
			setTimeoutId = null;
		}, time);
	}
}

