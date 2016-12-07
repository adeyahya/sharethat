var sharethat = (function(window) {
	
	var _openWindow = function(url, title, w, h) {
		url = url || this.getAttribute('href');
		title = title || 'Share That';
		w = w || 600;
		h = h || 450;

		var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
		var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

		var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
		var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

		var left = ((width / 2) - (w / 2)) + dualScreenLeft;
		var top = ((height / 2) - (h / 2)) + dualScreenTop;
		var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + (top - 100) + ', left=' + left);

		// Puts focus on the newWindow
		if (window.focus) {
			newWindow.focus();
		}
	};

	var _socialShare = function(event) {
		event.preventDefault();
		
		var message = this.getAttribute('data-message') || '';
		var target = this.getAttribute('data-target') || 'facebook';
		var imageUrl = this.getAttribute('data-image') || '';
		var url = '';

		if (this.getAttribute('href') == '') {
			url = document.URL;
		} else {
			url = this.getAttribute('href');
		}

		switch (target) {
		case 'facebook':
			return _openWindow('https://www.facebook.com/sharer/sharer.php?u=' + url);

		case 'twitter':
			return _openWindow('https://twitter.com/intent/tweet?original_referer=' + document.URL + '&text=' + message + ' ' + url);

		case 'googleplus':
			return _openWindow('https://plus.google.com/share?url=' + url);

		case 'linkedin':
			return _openWindow('https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=&summary=' + message + '&source=' + document.URL);
		case 'pinterest':
			return _openWindow('https://pinterest.com/pin/create/button/?url=' + url + '&media=' + imageUrl + '&description=' + message);
		}

	};

	

	// Document Ready
	document.addEventListener('DOMContentLoaded', function() {
		_bindingEvents();
	});

	var _bindingEvents = function() {
		document.querySelectorAll('[data-toggle="sharethat"]').forEach(function(el) {
			el.addEventListener('click', _socialShare);
		});
	};

	return {
		openWindow: _openWindow
	};
})(window);

module.exports = sharethat;