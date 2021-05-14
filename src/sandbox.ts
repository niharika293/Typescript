// Type Aliases : prevent code duplication / redundancy. 
// we can declare a particular type & store it & re-use it as per our own needs.

// Used for comlex / windy types.

type stringOrNum = string | number;

type objWithName = {
    name : string,
    uid : stringOrNum
}

const logDetails = (objNinja : stringOrNum)=> {
    console.log("Name is : " + objNinja);
}

logDetails('Luigi');