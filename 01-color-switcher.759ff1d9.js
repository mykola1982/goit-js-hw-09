const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let n=null;function e(){t.stopBtn.disabled=!0,t.startBtn.disabled&&(t.stopBtn.disabled=!1)}t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,e(),n=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.disabled=!1,e(),clearInterval(n)})),e();
//# sourceMappingURL=01-color-switcher.759ff1d9.js.map