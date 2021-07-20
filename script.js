// challenge 1:
function ageInDays()
{
 var birthyear = prompt("Enter your birth year");
 var age = 2021 - birthyear;
 var days = ((age*365) + (6*age)/24);
var h1 = document.createElement('h1');

var textAns = document.createTextNode('you are '+ days + ' days old');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAns);
document.getElementById('flex-box-result').appendChild(h1);

}
 

function reset()
{
 document.getElementById('ageInDays').remove();
}
// document.getElementById("days").innerHTML = days;