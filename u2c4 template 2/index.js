// write js code here corresponding to index.html
// You should add submit event on the form

var form = document.querySelector("form")
form.addEventListener("submit",function(event){

    arr = JSON.parse(localStorage.getItem("schedule")) || []
    event.preventDefault()
    
    var data = {
                MatchNumber:form.matchNum.value,
                TeamA:form.teamA.value ,
                TeamB:form.teamB.value ,
                Date:form.date.value ,
                Venue:form.venue.value 
    }
    //  console.log(data)
   
    arr.push(data)

    localStorage.setItem("schedule",JSON.stringify(arr))
    window.location.href="index.html";

})
