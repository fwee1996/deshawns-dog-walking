import { getWalkers } from "./database.js"

const walkers = getWalkers()

        //Book 3-column1-Using State for an Interactive Experience/Reading Hidden State:
        //can add event listener for when user type, click, scrolls or hover


//after addEventListener ()    bcs its a fn. Rmbr const fnName =()=>{}
document.addEventListener(
    "click", 
    //try to use different names like clickEvent and clickEvt in other js to make clearer
    (theClickEvent) => {
        //try to use different names like const whatWasClicked:
    const whatWasClickedOn = theClickEvent.target
    // debugger

// tilda button not single quotes!! 
//window alert is when a walker is clicked a window pops up to say "This walker works in Boise"
//in Elements tab:<li data-id="5" data-city="Boise">Elmira Bick</li>. It matches!
if (whatWasClickedOn.dataset.type === "walker") {// i add this condition so that not everything on the page you click will display pop up
    window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`)
        }
    }
)

export const Walkers = () => {

    //<ul> is unordered list, displayed in bullet points.
    let walkerHTML = "<ul>"

    for (const walker of walkers) {

        //Book 3-column1-Adding State to HTML:
        //<li> item in a list, content of each individual list item.
        //state is data, state stores data in html
        walkerHTML += `<li data-id="${walker.id}"
                            data-city="${walker.city}"
                            data-type="walker"
                            >${walker.name}
                        </li>`
        //so when you check devtools and the leftmost arrow icon and highlight a walker 
        //it'll show in devtools: <li data-id="2">Damara Pentecust</li>

        //i add another state city this is what i see now:
        //<li data-id="2" data-city="White Plains">Damara Pentecust</li>
        //these states help developers extract data when you click
                    
        //added another data-type so now list item or walker has 3 data attributes:
        //id, city and type 

        //Book 3-column1-Metadata as State
        //metadata is data about data
        //For this project, "what kind of data?"
        //Each city list item: metadata attribute called data-type with a value of "city".
        //Each walker list item .. data-type ... "walker".
        //line35: data-type="walker" 

        //summary: all these data attributes and metadata is within <li> tag
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

//this Walkers() fn is invoked in main.js

//summary: id and city are data attributes bcs data-id and data-city

//In devtools, refresh page go to sources, see that debugger paused.
//Look for dataset in Scope tab (lower right), this is what you see:
//dataset: DOMStringMap
//city: "Chicago"
//id: "1"