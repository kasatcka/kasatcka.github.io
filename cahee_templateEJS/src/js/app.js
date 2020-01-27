function initMap() {
			const location={lat: 49.170441, lng: 33.453477};
			var	map = new google.maps.Map(document.getElementById('map'), {
				center: location,
				zoom: 18
			});
			 var marker = new google.maps.Marker({position: location, map: map});
		}