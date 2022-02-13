var linkto = "https://html5up.net/",
linktext = "HTML5 Up";
var t = ["item_", "icon-"];
for (n=0; n<=1; n++)
{
document.getElementById(`${t[n]}sitereptile`).setAttribute("href", linkto)
document.getElementById(`${t[n]}sitereptile`).innerHTML=linktext;
}
