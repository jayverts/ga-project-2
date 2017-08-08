describe("User", function() {
 var person;
 before(function() {
  person = new User("Person");
 });
 describe("new", function() {
  it("initializes a new person", function() {
    expect(typeof(person)).to.equal("object");
  });
  describe("name", function(){
    it("allows the reading and writing of a name", function() {
      expect(person.name).to.equal("User");
    });
  });   
  }); 
 });