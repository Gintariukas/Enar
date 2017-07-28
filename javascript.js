/**
 * Created by Gintarė on 2017-07-28.
 */
$('.Count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn"); /* opens modal */

btn.onclick = function() {
    modal.style.display = "block"; /* open button */

};
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

function initMap() {
     var location = {lat: -12.043333, lng: -77.028333};
    var map = new google.maps.Map(document.getElementById("map"), {
         zoom: 14,
         center: location
     });
     var marker = new google.maps.Marker({
         position: {lat: -12.040397656836609, lng: -77.03373871559225},
         map: map,
         icon:''
    });
     var marker1 = new google.maps.Marker({
         position: {lat: -12.043333, lng: -77.028333},
         map: map
     });
    var marker2 = new google.maps.Marker({
         position: {lat: -12.050047116528843, lng: -77.02448169303511},
         map: map
     });
 }
 initMap();