(function() {
    function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
wait(3000);
  var builderlinkto = "https://html5up.net/",
        builderlinktext = "HTML5 Up";
    var t = ["item_", "icon-"];
    for (n=0; n<=1; n++)
    {
        document.getElementById(`${t[n]}sitereptile`).setAttribute("href", builderlinkto)
        document.getElementById(`${t[n]}sitereptile`).innerHTML=builderlinktext;
    }
  if(void 0!==PAGE.appGroups){var itemsToRemove={databases:[["feature","postgresql_databases"]},itemsToUpdate={databases:[{matchAttr:["feature","phpmyadmin"],newAttributes:[["target",""]],stripAttrsFromUrl:!0}],software:[{matchAttr:["feature","multiphp_configuration"],newAttributes:[["target",""]],stripAttrsFromUrl:!0}],support:[{matchAttr:["feature","cloudflare_analytics"],newAttributes:[["url","https://smallhost.tawk.help"]]}]};for(h=PAGE.appGroups.length-1;h>=0;h--)if(appGroup=PAGE.appGroups[h],"soft_div"!==appGroup.group){var removeFromGroup=itemsToRemove[appGroup.group],updateInGroup=itemsToUpdate[appGroup.group];for(i=appGroup.items.length-1;i>=0;i--)appItem=appGroup.items[i],void 0!==removeFromGroup&&removeFromGroup.forEach(function(t){appItem[t[0]]===t[1]&&appGroup.items.splice(i,1)}),void 0!==updateInGroup&&updateInGroup.forEach(function(t){appItem[t.matchAttr[0]]===t.matchAttr[1]&&(t.newAttributes.forEach(function(t){appItem[t[0]]=t[1]}),t.stripAttrsFromUrl&&(urlParts=appItem.url.split(" "),appItem.url=urlParts[0]))})}else PAGE.appGroups.splice(h,1)}
