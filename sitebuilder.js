var builderlinkto = "https://html5up.net/",
builderlinktext = "HTML5 Up";
var t = ["item_", "icon-"];
for (n=0; n<=1; n++)
{
document.getElementById(`${t[n]}sitereptile`).setAttribute("href", builderlinkto)
document.getElementById(`${t[n]}sitereptile`).innerHTML=builderlinktext;
}
