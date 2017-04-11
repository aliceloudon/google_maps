var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, { center: coords, zoom: zoom })
}

MapWrapper.prototype = {

  addMarker: function(coords, contentString){
    
    var marker = new google.maps.Marker({ 
      position: coords, 
      map: this.googleMap 
    })

    var infowindow = new google.maps.InfoWindow({ 
      content: contentString 
    })

      marker.addListener('click', function() {
        infowindow.open(this.googleMap, marker);
      })
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      this.addMarker(event.latLng)
    }.bind(this))
  }

}


// WHEN TO USE BIND...
// Whenever you've got a callback inside a function, you need to be careful what THIS is.
// If you don't bind it, you are calling .addMarker on google.maps.event 
// but we want to call it on MapWrapper, so we do .bind(this)