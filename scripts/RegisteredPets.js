import { getPets, getWalkers } from "./database.js"  //step3: import getWalkers fn

const pets = getPets()

// Book3-Finding the Walker for a Pet-clicks! event window pops up
//Step1:
document.addEventListener(
    "click", 
    (theClickEvent) => {   //function that is invoked when click happens //Can use the same name as Walkers clicks and clicks event
    const whatWasClickedOn = theClickEvent.target
    //debugger

    //make sure to use whatWasClickedOn:
    const walkerId = whatWasClickedOn.dataset.walkerforeignkey
    //debugger //

    //NOw in DevTools Scope tab:
    //theClickEvent...
    //walkerId: "1" ---Yay! So you got the string value of the FK (or PK of walker)


    //Step2: Find the whole walker object based on the walkerId from above

    //step4:
    const allWalkers = getWalkers()
    for (const walker of allWalkers){
        if (walker.id === parseInt(walkerId)){//rmbr parseInt bcs walkerId is string! now let debug with emoty if statement to see if id are matching
            //step 5:
            window.alert(`This pet is being walked by ${walker.name}`)
        }
        //debugger
    }
    })

    //in scope: walker: id: 3  see if match with walkerId: "9" 
    //press play button to keep running thru array --make if statement in for loop above

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-walkerForeignKey=${pet.walkerId}>${pet.name}</li>`
        //now you see <li data-walkerforeignkey="7">Rocket</li>
        //this will be used in "click" eventlistener
    }

    petHTML += "</ul>"

    return petHTML
}

//Book3-column1-Adding Foreign Keys as State
//when you click on a pet  a window pop up display walker name