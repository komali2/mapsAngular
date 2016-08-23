describe('mainModule', () => {
  beforeEach(() => {
    var app = module('mapApp');
  });
  it('should be a named module', () => {
    expect(app.name).toBeDefined();
  });
  it('should remember to check the name if it changes', () => {
    expect(app.name).toMatch('mapApp');
  });

});