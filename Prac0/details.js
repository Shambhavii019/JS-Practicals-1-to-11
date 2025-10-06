function enterDetails() {
    let name = prompt("Enter your name: ");
    let age = prompt("Enter your age: ");
    let city = prompt("Enter your city: ");
    alert("Welcome, "+name+", you are "+age+" years old and live in "+city+".");
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("City: " + city);
    document.write("Name: " + name + "<br>");
    document.write("Age: " + age + "<br>");
    document.write("City: " + city + "<br>");
    document.write("<h1>Details Entered Successfully!</h1>");
}