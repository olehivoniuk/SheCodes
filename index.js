let now = new Date();
console.log(now.getDate())
let hours = now.getHours();

let minutes = now.getMinutes();
let days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day = days[now.getDay()];
let lineDate = document.querySelector("#currentTime")
lineDate.innerHTML = day + " " + hours + ":" + minutes;

function search (event){
    event.preventDefault();
    let seacrhInput = document.querySelector("#dataInput");
    let h3 = document.querySelector("h3");
    if (seacrhInput.value){
        h3.innerHTML = seacrhInput.value ;
    } else {
        alert("Please type the city")
    }

}
let form = document.querySelector("#citySearch")
form.addEventListener("submit", search)

function switchTemp(event){
    event.preventDefault();
    let tempertarure = document.querySelector("#tempSwitcher") ;
    tempertarure.innerHTML = "19" ;
    
}

let tempCelcius = document.querySelector("#celcius");
tempCelcius.addEventListener("click",switchTemp);

function changeTemp(event){
    event.preventDefault();
    let degrees = document.querySelector("#tempSwitcher");
    degrees.innerHTML = "63";
}
let tempFaringates = document.querySelector("#faringates");
tempFaringates.addEventListener("click", changeTemp);
