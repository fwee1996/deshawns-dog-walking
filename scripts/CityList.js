import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    //try to use different names like clickEvent and clickEvt in other js to make clearer
    (theClickEvent)=>{
        //try to use different names like const cityTarget:
    const whatWasClickedOn=theClickEvent.target
        // debugger
            if (whatWasClickedOn.dataset.type === "city"){
               window.alert(`${whatWasClickedOn.dataset.walkername} is servicing this city`)
            }
        }
    
)


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const walker of walkers) {
        citiesHTML += `<li data-type= "city" data-walkername="${walker.name}">${walker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

