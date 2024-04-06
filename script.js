const endtime = document.getElementById("endtime").innerHTML = "07 April 2024 11: 10 PM";
const  inputs = document.querySelectorAll("input");


/* 
* 1 day = 24 hors
* 1 hor = 60 min
* 60 min = 3600 sec 
*/
//func for the calculating time
const clock = () =>{
    const end = new Date(endtime) // get the date form the variable endtime
    const now = new Date() // the current date of a computer
    const diff = (end - now) / 1000; // differnce between the end dae and the current date and also converte the milli sec to sec
    if(diff < 0) return; // return or ovide in -1 etc etc..
    // converting into days
   inputs[0].value = Math.floor(diff / 3600 / 24);
    //calculating hours.
   inputs[1].value = Math.floor(diff / 3600) % 24;
   //calculating minutes
   inputs[2].value = Math.floor(diff / 60) % 60;
   //calculating sec
   inputs[3].value = Math.floor(diff % 60);
} 
// initial call
clock()
// call the function every 1 sec
setInterval(
    ()=>{
        clock()
    },
    1000
)
