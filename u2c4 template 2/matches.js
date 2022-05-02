// write js code here corresponding to matches.html

var arr = JSON.parse(localStorage.getItem("schedule"))

displatdata(arr)

var favouritesArr = JSON.parse(localStorage.getItem("favourites")) || []

function displatdata(arr){
    arr.forEach(function(elem){
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.MatchNumber

        var td2 = document.createElement("td");
        td2.innerText = elem.TeamA

        var td3 = document.createElement("td");
        td3.innerText = elem.TeamB

        var td4 = document.createElement("td");
        td4.innerText = elem.Date

        var td5 = document.createElement("td");
        td5.innerText = elem.Venue

        var td6 = document.createElement("td");
        td6.innerText = "Favourites"
        td6.style.color = "green"
        td6.style.cursor = "pointer"
        td6.addEventListener("click",function(){
            favouritesfunction(elem)
        })
        // console.log(arr)

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)

     })
}

function favouritesfunction(elem){
    favouritesArr.push(elem)
    
    localStorage.setItem("favourites",JSON.stringify(favouritesArr));


}