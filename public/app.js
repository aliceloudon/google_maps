var initialize = function() {
  var center = { lat: 55.938921, lng: -3.199422 }
  var contentString = 'This is where I live'
  var container = document.getElementById('main-map')
  var mainMap = new MapWrapper(container, center, 15)
  
  mainMap.addMarker(center, contentString)
  mainMap.addClickEvent()

}

window.onload = initialize