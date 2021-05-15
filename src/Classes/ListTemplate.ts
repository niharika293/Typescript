//listtemplate.ts
// Outputs the state of the object using format() on the screen instead of logging out on console.

import { HasFormatter } from "../Interfaces/HasFormatter";

// 1. Register a list container (ul) inside the constructor, that'll hold which list items to be displayed.
// 2. Create a render method to render a new 'li' to the container. 
// accepts 3 arguments -> Invoice/payment, heading, position
// Create the HTML Template (li, h4, p)
// Add the li template to the start / end of the list.

export class ListTemplate {
    // short-hand property for initialising the constructor.
    constructor(private container : HTMLUListElement){};
    // item type -> HasFormatter as It can either be Invoice / payment either of which implements this Hasformatter.
    // heading will be the type displayed either as Invoice / Payment.
    // Pos : start or end {Unioun type, no other values allowed! }  
    render(item : HasFormatter , heading : string, pos : 'start'|'end'){
        const li = document.createElement('li')!;
        const h4 = document.createElement('h4')!;
        const p = document.createElement('p')!;

        h4.innerText = heading;
        li.append(h4);
        
        p.innerText = item.format();

        li.append(p);

        if(pos === 'start'){
            this.container.prepend(li);
        }
        else{
            this.container.append(li);
        }
    }


}