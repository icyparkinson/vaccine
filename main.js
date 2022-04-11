const vac1Sec = document.querySelector(".vac1Sec")
const vac2Sec = document.querySelector(".vac2Sec")
const vac3Sec = document.querySelector(".vac3Sec")
const vac4Sec = document.querySelector(".vac4Sec")
const vac5Sec = document.querySelector(".vac5Sec")


const doseZero = document.querySelector("#doseZero")
const doseOne = document.querySelector("#doseOne")
const doseTwo = document.querySelector("#doseTwo")
const doseThree = document.querySelector("#doseThree")
const doseFour = document.querySelector("#doseFour")
const doseFive = document.querySelector("#doseFive")


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
const vac5 = document.querySelector("#vac5")



const answer = document.querySelector("#answer")


//*********************** */
//DROP DOWN MENU FOR DOSES//
//*********************** */

function clearOptions(){
    vac1.options[0].selected="true"
    vac2.options[0].selected="true"
    vac3.options[0].selected="true"
    vac4.options[0].selected="true"
    vac5.options[0].selected="true"
}

doseZero.addEventListener("click", hideDrops)

function hideDrops(){
    clearOptions()
    vac1Sec.classList.add("hidden")
    vac2Sec.classList.add("hidden")
    vac3Sec.classList.add("hidden")
    vac4Sec.classList.add("hidden")
    vac5Sec.classList.add("hidden")

}

doseOne.addEventListener("click", showDrop1)

function showDrop1(){
    clearOptions()
    vac1Sec.classList.remove("hidden")
    vac2Sec.classList.add("hidden")
    vac3Sec.classList.add("hidden")
    vac4Sec.classList.add("hidden")
    vac5Sec.classList.add("hidden")

    
}

doseTwo.addEventListener("click", showDrop2)

function showDrop2(){
    clearOptions()
    vac1Sec.classList.remove("hidden")
    vac2Sec.classList.remove("hidden")
    vac3Sec.classList.add("hidden")
    vac4Sec.classList.add("hidden")
    vac5Sec.classList.add("hidden")

}

doseThree.addEventListener("click", showDrop3)

function showDrop3(){
    clearOptions()
    vac1Sec.classList.remove("hidden")
    vac2Sec.classList.remove("hidden")
    vac3Sec.classList.remove("hidden")
    vac4Sec.classList.add("hidden")
    vac5Sec.classList.add("hidden")

}

doseFour.addEventListener("click", showDrop4)

function showDrop4(){
    clearOptions()
    vac1Sec.classList.remove("hidden")
    vac2Sec.classList.remove("hidden")
    vac3Sec.classList.remove("hidden")
    vac4Sec.classList.remove("hidden")
    vac5Sec.classList.add("hidden")
}

doseFive.addEventListener("click", showDrop5)

function showDrop5(){
    clearOptions()
    vac1Sec.classList.remove("hidden")
    vac2Sec.classList.remove("hidden")
    vac3Sec.classList.remove("hidden")
    vac4Sec.classList.remove("hidden")
    vac5Sec.classList.remove("hidden")
}


document.querySelector("#submit").addEventListener("click", getShot)

function getShot(){

    //BABY//
    if (ageBaby.checked){
        answer.innerText = "Unfortunately, children under 5 are not eligible for any vaccine at this time."
    }

    //KID//

    if (ageKid.checked && (vac1.value!="pfizer" || vac2.value!="pfizer")){
        answer.innerText = "Did you select the right vaccines? Pfizer is the only vaccine approved for patients under 12 years old."
    }

    if (ageKid.checked && (doseThree.checked || doseFour.checked || doseFive.checked)){
        answer.innerText = "Did you select the right number of doses? Patients under 12 years old should only receive up to 2 full doses. Boosters are not recommended at this time."
    }

    if (ageKid.checked && doseOne.checked && vac1.value==="pfizer"){
        answer.innerText = "This patient should receive a second Pfizer pediatric dose(0.2mL) at least 21 days from the first dose."
    }

    if (ageKid.checked && doseTwo.checked && vac1.value==="pfizer" && vac2.value==="pfizer"){
        answer.innerText = "This patient is fully vaccinated and is currently not eligible for additional doses at this time."
    }

    if (ageKid.checked && doseZero.checked){
        answer.innerText = "This patient is eligible for 2 doses of Pfizer at the pediatric dose (0.2mL) with 21 days in between."
    }

    //TEEN//

    if (ageTeen.checked && (vac1.value!="pfizer" || vac2.value!="pfizer" || vac3.value!="pfizer" || vac4.value!="pfizer" || vac5.value!="pfizer")){
        answer.innerText = "Did you select the right vaccines? Pfizer is the only vaccine approved for patients under 18 years old."
    }

    if (ageTeen.checked && notImmuno.checked && (doseFour.checked || doseFive.checked)){
        answer.innerText = "Did you select the right number of doses? Patients under 18 years old who are not immunocompromised should only receive up to 3 doses (2 primary + 1 booster)."
    }

    if (ageTeen.checked && doseZero.checked){
        answer.innerText = "This patient is eligible for 2 doses of Pfizer at the adult dose (0.3mL) with 21 days in between, followed by a Pfizer booster (0.3mL) at least 5 months from the 2nd dose."
    }
    
    if (ageTeen.checked && doseOne.checked && vac1.value==="pfizer"){
        answer.innerText = "This patient should receive a 2nd Pfizer adult dose(0.3mL) at least 21 days from the 1st dose, followed by a Pfizer booster (0.3mL) at least 5 months from the 2nd dose."
    }

    if (ageTeen.checked && doseTwo.checked && vac1.value==="pfizer" && vac2.value==="pfizer"){
        answer.innerText = "This patient should receive a booster Pfizer (0.3mL) at least 5 months from the 2nd dose."
    }

    if (ageTeen.checked && doseThree.checked && vac1.value==="pfizer" && vac2.value==="pfizer" && vac3.value==="pfizer"){
        answer.innerText = "This patient is fully vaccinated and is currently not eligible for additional doses at this time."
    }

    //TEEN IMMUNOCOMPROMISED//

    if (ageTeen.checked && doseZero.checked && isImmuno.checked){
        answer.innerText = "This patient is eligible for 2 doses of Pfizer at the adult dose (0.3mL) with 21 days in between, followed by a 3rd Pfizer dose (0.3mL) at least 4 weeks from the 2nd dose."
    }
    
    if (ageTeen.checked && doseOne.checked && isImmuno.checked && vac1.value==="pfizer"){
        answer.innerText = "This patient should receive a 2nd Pfizer adult dose(0.3mL) 21 days from the first dose, followed by a 3rd Pfizer (0.3mL) at least 4 weeks from the 2nd dose."
    }

    if (ageTeen.checked && doseTwo.checked && isImmuno.checked && vac1.value==="pfizer" && vac2.value==="pfizer"){
        answer.innerText = "This patient should receive a 3rd Pfizer (0.3mL) at least 4 weeks from the 2nd dose, followed by a Pfizer booster (0.3mL) at least 3 months from the 3rd dose."
    }

    if (ageTeen.checked && doseThree.checked && isImmuno.checked && vac1.value==="pfizer" && vac2.value==="pfizer" && vac3.value==="pfizer"){
        answer.innerText = "This patient is eligible for two Pfizer boosters (0.3mL): \n\nThe 1st booster at least 3 months from the 3rd dose, \nfollowed by a 2nd booster at least 4 months from the 4th dose (1st booster)."
    }

    if (ageTeen.checked && doseFour.checked && isImmuno.checked && vac1.value==="pfizer" && vac2.value==="pfizer" && vac3.value==="pfizer" && vac4.value==="pfizer"){
        answer.innerText = "This patient should receive a 2nd Pfizer booster (0.3mL) at least 4 months from the 4th dose (1st booster)."
    }

    if (ageTeen.checked && doseFive.checked && isImmuno.checked && vac1.value==="pfizer" && vac2.value==="pfizer" && vac3.value==="pfizer" && vac4.value==="pfizer" && vac5.value==="pfizer"){
        answer.innerText = "This patient is fully vaccinated and is currently not eligible for additonal doses at this time."
    }




    //ADULT//

    if (ageAdult.checked && (vac1.value==="none") || vac2.value==="none" || vac3.value==="none" || vac4.value==="none" || vac5.value==="none"){
        answer.innerText = "Please select a vaccine for each received dose above."
    }
    
    if (ageAdult.checked && doseZero.checked){
        answer.innerText = "This patient is eligible for one of the following: \n\n 2 doses of Pfizer (0.3mL) at least 21 days apart \n 2 doses of Moderna (0.5mL) at least 28 days apart \n 1 dose of J&J (0.5mL)"
    }

    if (ageAdult.checked && doseOne.checked && vac1.value==="pfizer"){
        answer.innerText = "This patient should receive a 2nd Pfizer adult dose (0.3mL) at least 21 days from the first dose, followed by one of the following at least 5 months from the 2nd dose: \n\n A Pfizer booster (0.3mL) \n A Moderna booster (0.25mL) \n A J&J booster (0.5mL)"
    }

    if (ageAdult.checked && doseOne.checked && vac1.value==="moderna"){
        answer.innerText = "This patient should receive a 2nd Moderna adult dose (0.5mL) at least 28 days from the 1st dose, followed by one of the following at least 5 months from the 2nd dose: \n\n A Pfizer booster (0.3mL) \n A Moderna booster (0.25mL) \n A J&J booster (0.5mL)"
    }

    if (ageAdult.checked && doseOne.checked && vac1.value==="jj"){
        answer.innerText = "This patient is eligible for a booster dose at least 2 months after their first dose. They can choose from the following: \n\n A Pfizer booster (0.3mL) \n A Moderna booster (0.25mL) \n A J&J booster (0.5mL)"
    }

    if (ageAdult.checked && doseTwo.checked && (vac1.value==="pfizer" && vac2.value==="pfizer") || (vac1.value==="moderna" && vac2.value==="moderna")){
        answer.innerText = "This patient is eligible for one booster dose at least 5 months from the 2nd dose. They can choose from the following:\n\n A Pfizer booster (0.3mL) \n A Moderna booster (0.25mL) \n A J&J booster (0.5mL)"
    }

    if (ageAdult.checked && doseTwo.checked && vac1.value==="jj" && vac2.value!="jj"){
        answer.innerHTML = "This patient is fully vaccinated and is currently not eligible for additional doses at this time."
    }

    if (ageAdult.checked && doseTwo.checked && vac1.value==="jj" && vac2.value==="jj"){
        answer.innerText = "This patient is eligible for a 2nd booster dose at least 4 months after their 2nd dose. They can choose from the following: \n\n A Pfizer booster (0.3mL) \n A Moderna booster (0.25mL)"
    }

    if (ageAdult.checked && doseThree.checked){
        answer.innerText = "This patient is fully vaccinated and is currently not elligible for additional doses at this time."
    }

    //ADULT IMMUNOCOMPROMISED//

    if (ageAdult.checked && doseZero.checked && isImmuno.checked){
        answer.innerText = "This patient is eligible for one of the following: \n\n 2 doses of Pfizer (0.3mL) 21 days apart \n 2 doses of Moderna (0.5mL) 28 days apart \n 1 dose of J&J (0.5mL)"
    }

    if (ageAdult.checked && doseOne.checked && isImmuno.checked && vac1.value==="pfizer"){
        answer.innerText = "This patient should receive a 2nd Pfizer adult dose (0.3mL) 21 days from the first dose, followed by a 3rd Pfizer dose (0.3mL) at least 28 days from the 2nd dose."
    }

    if (ageAdult.checked && doseOne.checked && isImmuno.checked && vac1.value==="moderna"){
        answer.innerText = "This patient should receive a 2nd Moderna adult dose (0.5mL) 28 days from the 1st dose, followed by a 3rd Moderna dose (0.5mL) at least 28 days from the 2nd dose."
    }
    
    if (ageAdult.checked && doseOne.checked && isImmuno.checked && vac1.value==="jj"){
        answer.innerText = "This patient is eligible for a 2nd dose at least 28 days from the 1st dose. They can choose from the following:\n\n A full Pfizer dose (0.3mL)\n A full Moderna dose (0.3mL)"
    }
    
    if (ageAdult.checked && doseTwo.checked && isImmuno.checked && vac1.value==="pfizer" && vac2.value=="pfizer"){
        answer.innerText = "This patient should received a 3rd dose of Pfizer at least 28 days from their 2nd dose, followed by a booster dose at least 3 months later."
    }

    if (ageAdult.checked && doseTwo.checked && isImmuno.checked && vac1.value==="moderna" && vac2.value=="moderna"){
        answer.innerText = "This patient should received a 3rd dose of Moderna at least 28 days from their 2nd dose, followed by a booster dose at least 3 months later."
    }

    if (ageAdult.checked && doseTwo.checked && isImmuno.checked && vac1.value==="jj" & vac2.value==="jj"){
        answer.innerText = "Are you sure you selected the correct vaccine? An immunocompromised patient should not have received two J&J vaccines as their primary series."
    }

    if (ageAdult.checked && doseTwo.checked && isImmuno.checked && vac1.value==="jj" & vac2.value==="pfizer"){
        answer.innerText = "This patient is eligible for a booster dose at least 2 months from their 2nd dose. They can choose from the following:\n\n A full Pfizer dose (0.3mL)\n A booster Moderna dose (0.25mL)\n a full J&J dose (0.5mL)"
    }

    if (ageAdult.checked && doseTwo.checked && isImmuno.checked && vac1.value==="jj" & vac2.value==="moderna"){
        answer.innerText = "This patient is eligible for an additional 3rd dose at least 2 months from their 2nd dose. They can choose from the following:\n\n If 2nd dose was a full dose (0.5mL):\n A full Pfizer dose (0.3mL)\n A booster Moderna dose (0.25mL)\n A full J&J dose (0.5mL)\n\n If 2nd dose was a booster dose (0.25mL): \n A full Pfizer dose (0.3mL)\n A full Moderna dose (0.5mL)"
    }
 

    






}
