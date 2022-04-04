const vac1Sec = document.querySelector(".vac1Sec")
const vac2Sec = document.querySelector(".vac2Sec")
const vac3Sec = document.querySelector(".vac3Sec")
const vac4Sec = document.querySelector(".vac4Sec")

const doseZero = document.querySelector("#doseZero")
const doseOne = document.querySelector("#doseOne")
const doseTwo = document.querySelector("#doseTwo")
const doseThree = document.querySelector("#doseThree")
const doseFour = document.querySelector("#doseFour")

const ageBaby = document.querySelector("#ageBaby")
const ageKid = document.querySelector("#ageKid")
const ageTeen = document.querySelector("#ageTeen")
const ageAdult = document.querySelector("#ageAdult")
const ageElder = document.querySelector("#ageElder")

const isImmuno = document.querySelector("#isImmuno")
const notImmuno = document.querySelector("#notImmuno")

const vac1 = document.querySelector("#vac1")
const vac2 = document.querySelector("#vac2")
const vac3 = document.querySelector("#vac3")
const vac4 = document.querySelector("#vac4")



const answer = document.querySelector("#answer")


//*********************** */
//DROP DOWN MENU FOR DOSES//
//*********************** */

doseZero.addEventListener("click", hideDrops)

function hideDrops(){
    vac1Sec.classList.add("hidden")
    vac2Sec.classList.add("hidden")
    vac3Sec.classList.add("hidden")
    vac4Sec.classList.add("hidden")
}

doseOne.addEventListener("click", showDrop1)

function showDrop1(){
    vac1Sec.classList.remove("hidden")
    vac2Sec.classList.add("hidden")
    vac3Sec.classList.add("hidden")
    vac4Sec.classList.add("hidden")
}

doseTwo.addEventListener("click", showDrop2)

function showDrop2(){
    vac1Sec.classList.remove("hidden")
    vac2Sec.classList.remove("hidden")
    vac3Sec.classList.add("hidden")
    vac4Sec.classList.add("hidden")
}

doseThree.addEventListener("click", showDrop3)

function showDrop3(){
    vac1Sec.classList.remove("hidden")
    vac2Sec.classList.remove("hidden")
    vac3Sec.classList.remove("hidden")
    vac4Sec.classList.add("hidden")
}

doseFour.addEventListener("click", showDrop4)

function showDrop4(){
    vac1Sec.classList.remove("hidden")
    vac2Sec.classList.remove("hidden")
    vac3Sec.classList.remove("hidden")
    vac4Sec.classList.remove("hidden")
}


document.querySelector("#submit").addEventListener("click", getShot)

function getShot(){
    if (ageBaby.checked){
        answer.innerText = "Unfortunately, children under 5 are not eligible for any vaccine at this time."
    }

    if (doseZero.checked && ageKid.checked){
        answer.innerText = "The patient is eligible for 2 doses of Pfizer at the pediatric dose (0.2mL) with 21 days in between."
    }

    if (doseOne.checked && vac1.value==="pfizer"){
        answer.innerText = "The patient should receive a second Pfizer pediatric dose(0.2mL) at least 21 days from the first dose."
    }






}


//*********************** */
// ZERO DOSES //
//*********************** */

