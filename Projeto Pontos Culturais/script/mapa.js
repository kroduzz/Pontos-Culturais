	var mymap = L.map('mapid').setView([-22.907104, -47.063240] ,10);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

		
	L.marker([-22.9068312, -47.0596511]).addTo(mymap)
		.bindPopup("<b>Museu da Imagem e do Som</b>");

	L.marker([-22.814953, -47.057747]).addTo(mymap)
		.bindPopup("<b>Museu Exploratório de Ciências - Unicamp</b>");

	L.marker([-22.9087447, -47.0667922]).addTo(mymap)
		.bindPopup("<b>Estação Cultura</b>");

	L.marker([-22.7748247, -47.0935932]).addTo(mymap)
		.bindPopup("<b>Centro Cultural Casarão do Barão</b>");

	L.marker([-22.904155, -47.074861]).addTo(mymap)
		.bindPopup("<b>SESC Campinas</b>");

	L.marker([-22.9012480, -47.0566680]).addTo(mymap)
		.bindPopup("<b>Museu de Arte Contemporânea (MACC)</b>");

	L.marker([-22.8586840, -47.0297560]).addTo(mymap)
		.bindPopup("<b>Maria Fumaça</b>");

	L.marker([-22.8920380, -47.0284570]).addTo(mymap)
		.bindPopup("<b>Teatro Iguatemi</b>");

	L.marker([-22.8584900, -47.0462790]).addTo(mymap)
		.bindPopup("<b>CPFL Cultura</b>");

	L.marker([-22.9151090, -47.0687070]).addTo(mymap)
		.bindPopup("<b>Teatro SESI – Campinas</b>");
		
	$('#tabs a').click(function(e) {
	    e.preventDefault();
	    var index = $(this).attr('data-load');
	    showGroup(index);
	});

	function showGroup(index) {
	    var el = $('#g'+index);
	    $('#tabs li').removeClass('active');
	    $(el).parent().addClass('active');
	    $.getJSON('data/ajax.php', { type: index }, function(data) {
	        //loads data into the map
	        maplace.Load({
	            locations: data.locations,
	            view_all_text: data.title,
	            type: data.type,
	            force_generate_controls: true
	        });
	    });
	}

showGroup(0);