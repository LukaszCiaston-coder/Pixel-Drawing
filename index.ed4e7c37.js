!function(){var e="red";document.getElementById("canvas");function t(t){e=t}function n(t){t.target.style.backgroundColor=e}for(var c=document.getElementById("canvas"),d=0;d<225;d++){var r=document.createElement("div");r.classList.add("tile"),r.addEventListener("click",n),c.appendChild(r)}document.getElementById("red").addEventListener("click",(function(){return t("red")})),document.getElementById("blue").addEventListener("click",(function(){return t("blue")})),document.getElementById("green").addEventListener("click",(function(){return t("green")})),document.getElementById("white").addEventListener("click",(function(){return t("white")})),document.getElementById("black").addEventListener("click",(function(){return t("black")})),document.getElementById("yellow").addEventListener("click",(function(){return t("yellow")})),document.getElementById("papayawhip").addEventListener("click",(function(){return t("rgb(241, 145, 80)")})),document.getElementById("cleanBtn").addEventListener("click",(function(){var e=document.getElementsByClassName("tile");Array.from(e).forEach((function(e){e.style.backgroundColor=""}))})),document.getElementById("saveBtn").addEventListener("click",(function(){var e=document.createElement("canvas"),t=e.getContext("2d"),n=30;e.width=450,e.height=450;var c=document.getElementsByClassName("tile");Array.from(c).forEach((function(e,c){var d=Math.floor(c/15),r=c%15,a=e.style.backgroundColor;t.fillStyle=a||"white",t.fillRect(r*n,d*n,n,n)}));var d=document.createElement("a");d.href=e.toDataURL("image/jpeg",1),d.download="image.jpg",d.click()}))}();
//# sourceMappingURL=index.ed4e7c37.js.map
