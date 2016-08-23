describe('searchFactory', ()=>{
    beforeEach(()=>{
        module('mapApp');
        inject(($injector)=>{
            searchFactory = $injector.get('searchFactory');
        });
    });

    it('should exist', ()=>{
        expect(searchFactory).toBeDefined();
    });

    it('should have a search function', ()=>{
        expect(searchFactory.search).toBeDefined();
    });

    it('should have a getDetails function', ()=>{
        expect(searchFactory.getDetails).toBeDefined();
    });

    
});