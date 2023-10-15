function initMap() {

    const skidpirates = { lat:42.17748774134555, lng:-88.42281288903445 };

    const map = new google.maps.Map(document.getElementById("map"), {

      zoom: 17,

      center: skidpirates,

    });

    const marker = new google.maps.Marker({

      position: skidpirates,

      map: map,

    });

  }