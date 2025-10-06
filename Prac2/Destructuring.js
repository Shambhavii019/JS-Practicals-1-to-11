let colors = ["red", "green", "blue"];
let [a, b, c] = colors;
colors = ["yellow", "purple", "orange"]; // This line gave an error because 'colors' was a constant earlier
// Now we can reassign 'colors' since it is not declared with 'const'
console.log(a); 
console.log(b); 
console.log(c); 

let [d] = colors;
console.log(d); // This will log "yellow" since 'colors' was reassigned