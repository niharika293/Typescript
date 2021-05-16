"use strict";
// There are no ENUMS in Javascript.
// ENUMS : special types in Typescript that allow us to store a set of constants or keywords & associate them with a numeric value.
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
const docOne = {
    uid: 5,
    resourceType: ResourceType.BOOK
};
const docTwo = {
    uid: 6,
    resourceType: 2 //allowed
};
console.log(docOne); //{uid: 5, resourceType: 0}
console.log(docTwo); //{uid: 6, resourceType: 2}
