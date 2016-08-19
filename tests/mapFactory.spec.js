describe('mapFactory', ()=>{
    var mapFactory;
    var map;
    var infoWindow;


    var location = {
        zoom: 14,
        center: new google.maps.LatLng(37.779353, -122.398030),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };



    beforeEach(()=>{
        module('mapApp');
        inject(($injector)=>{
            mapFactory = $injector.get('mapFactory');
        });
    });


    it('should be defined factory', ()=>{
        expect(mapFactory).toBeDefined();
    });
    it('should have a mapOptions obj', ()=>{
        expect(mapFactory.mapOptions).toBeDefined();
        expect(typeof mapFactory.mapOptions).toBe('object');
        expect(mapFactory.mapOptions['SOMA']).toBeDefined();
        expect(mapFactory.mapOptions['SOMA']['center']).toBeDefined();
    });

    it('should init', ()=>{
        expect(mapFactory.init).toBeDefined();
        var element = document.createElement('div');
        element.classList.add('map');
        map = mapFactory.init(element, location);
        expect(map instanceof google.maps.Map).toBe(true);
    });

    it('should have a createMarker function', ()=>{
        expect(mapFactory.createMarker).toBeDefined();
        
        //let marker = mapFactory.createMarker({lat: 1, long: 2});
        //expect(marker).toBeDefined();
    });


});