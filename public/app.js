var initialize = function() {
  
  var homeLocation = { lat: 55.938921, lng: -3.199422 }
  var chicagoLocation = { lat: 41.878114, lng: -87.629798}
  var contentString = 'This is where I live'
  var container = document.getElementById('main-map')
  var mainMap = new MapWrapper(container, homeLocation, 15)



  var handleChicagoButtonClicked = function(){
    mainMap.googleMap.setCenter(chicagoLocation)
  }

  var handleHomeButtonClicked = function(){
    mainMap.googleMap.setCenter(homeLocation)
  }

  var handleWhereAmIButtonClicked = function(){
    console.log('getting location... Be patient...')

    navigator.geolocation.getCurrentPosition(function(position){
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
      var geolocation = { lat: latitude, lng: longitude }
      mainMap.googleMap.setCenter(geolocation)
    })

  // It works! Just takes a few seconds to get there
  }



  var chicagoButton = document.querySelector('#chicago-button')
  chicagoButton.onclick = handleChicagoButtonClicked

  var homeButton = document.querySelector('#home-button')
  homeButton.onclick = handleHomeButtonClicked

  // var whereAmIButton = document.querySelector('#where-am-I-button')
  // whereAmIButton.onClick = handleWhereAmIButtonClicked

  var whereAmIButton = document.querySelector('#where-am-I-button')
  whereAmIButton.onclick = handleWhereAmIButtonClicked


  mainMap.addMarker(homeLocation, contentString)
  mainMap.addClickEvent()

}





window.onload = initialize