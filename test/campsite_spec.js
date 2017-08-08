describe("campSite", function() {
 var site;
 before(function() {
  site = new campSite("site");
 });
 describe("new", function() {
  it("initializes a new site", function() {
    expect(typeof(site)).to.equal("object");
  });
  describe("campsite", function(){
    it("allows the reading and writing of a name", function() {
      expect(site.campSite).to.equal("campsite");
    });
  });   
  }); 
 });