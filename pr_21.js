import"./assets/modulepreload-polyfill-B5Qt9EMX.js";document.addEventListener("DOMContentLoaded",()=>{const o=["Rectangle_12","Rectangle_11","Rectangle_10","Rectangle_9","Rectangle_8","Rectangle_7","Rectangle_6","Rectangle_5","Rectangle_4","first_screen_1"],c=document.querySelectorAll(".marquee__inner");function i(){return window.innerWidth<=480?"_m":window.innerWidth<=768?"_m_x2":"_x2"}function r(){c.forEach(n=>{n.innerHTML="",[...o].sort(()=>Math.random()-.5).forEach(e=>{const l=i(),d=`/img/covers/${e}${l}.jpg`,t=document.createElement("img");t.classList.add("marquee__line"),t.src=d,t.alt=e,n.appendChild(t)})})}const s=document.getElementById("covers");new IntersectionObserver(n=>{n.forEach(a=>{a.intersectionRatio>=.25?document.querySelectorAll(".marquee__line").forEach(e=>{e.style.animationPlayState="running"}):document.querySelectorAll(".marquee__line").forEach(e=>{e.style.animationPlayState="paused"})})},{threshold:.15}).observe(s),r(),window.addEventListener("resize",r)});
//# sourceMappingURL=pr_21.js.map
