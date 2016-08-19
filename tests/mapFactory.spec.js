describe('mapFactory', ()=>{
    var mapFactory;
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
    })


});