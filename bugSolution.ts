function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(persons: string[]) {
  return persons.map(person => "Hello, " + person);
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // Correct usage with array
console.log(greeter(user[0])); // Correct usage with individual string element