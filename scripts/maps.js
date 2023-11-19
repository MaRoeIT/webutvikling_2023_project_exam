let map;

async function initMap() {
    const ostfold_university_collage = {lat: 59.1289181, lng: 11.3528813};
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    let map = new Map(
        document.getElementById("map"), {
            zoom: 15,
            center: ostfold_university_collage, 
            mapId: "DEMO_MAP_ID"
        }
    );

    const marker = new AdvancedMarkerElement({
        map: map,
        position: ostfold_university_collage,
        title: "Østfold university collage"
    })
}

initMap();