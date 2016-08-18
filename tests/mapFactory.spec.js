describe('mapFactory', ()=>{
    var google = {
        maps : {
            OverlayView : function () {
            },
            Marker : function () {
            },
            InfoWindow : function () {
            }
        }
    };
    beforeEach(()=>{
        module('mapApp');

    });
    var mapFactory;
    beforeEach(inject((mapFactory)=>{
        mapFactory = mapFactory;
    }));
    it('should be a named module', ()=>{
        expect(mapFactory).toBeDefined();
    });


});