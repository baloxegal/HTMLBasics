var el = this.document.getElementById("content");
var User = (function () {
    function User(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    return User;
}());
var tom = new User("Том", 29);
el.innerHTML = "Name: " + tom.name + " Age: " + tom.age;
//# sourceMappingURL=app.js.map