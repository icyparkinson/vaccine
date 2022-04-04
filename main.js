const vac1Sec = document.querySelector(".vac1Sec")
const vac2Sec = document.querySelector(".vac2Sec")
const vac3Sec = document.querySelector(".vac3Sec")
const vac4Sec = document.querySelector(".vac4Sec")

const doseZero = document.querySelector("#doseZero")
const doseOne = document.querySelector("#doseOne")
const doseTwo = document.querySelector("#doseTwo")
const doseThree = document.querySelector("#doseThree")
const doseFour = document.querySelector("#doseFour")



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