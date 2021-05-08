var ninja = {
    name: 'Mario',
    belt: 'Black',
    age: 2
};
ninja.age = 40; //allowed, since same type 
//ninja.name = 30; //error : different types
// Once we've defined an object, no additional property can be added.
//ninja.skills = ['fighting','drama']; //error
// Over-writing objects : When over-writing, properties must be matched with the original properties,
//when they were first created/declared. They must have the same types , & no additional properties
// can be added. 
ninja = {
    name: 'Luigi',
    belt: 'Orange',
    age: 45
};
console.log("My Ninja is : " + ninja.name);
