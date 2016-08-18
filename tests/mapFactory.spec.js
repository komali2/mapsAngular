describe('mapFactory', ()=>{
    var mapFactory;
    beforeEach(()=>{
        module('mapApp');
        inject(($injector)=>{
            mapFactory = $injector.get('mapFactory');
        });
    });


    it('should be a named module', ()=>{
        expect(mapFactory).toBeDefined();
    });


});