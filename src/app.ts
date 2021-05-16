// There are no ENUMS in Javascript.
// ENUMS : special types in Typescript that allow us to store a set of constants or keywords & associate them with a numeric value.

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON};
// indexing starts from 0

interface Resource{
    uid : number;
    resourceType : ResourceType;
}

const docOne : Resource = {
    uid : 5,
    resourceType : ResourceType.BOOK
}

const docTwo : Resource = {
    uid : 6,
    resourceType : 2 //allowed
}

console.log(docOne); //{uid: 5, resourceType: 0}
console.log(docTwo); //{uid: 6, resourceType: 2}
