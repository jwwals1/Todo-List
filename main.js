(()=>{"use strict";class e{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o}}const t=[],n=function(){let n=document.querySelector("#todoTitleInput").value,o=document.querySelector("#todoDescriptionInput").value,d=document.querySelector("#dueDateInput").value,i=document.querySelector("#priorityInput").value,c=new e(n,o,d,i);0!=n.length&&0!=o.length&&0!=d.length&&""!=i.length?(t.push(c),function(){const e=document.getElementById("todos");e.innerHTML="";for(let n=0;n<t.length;n++){let o=t[n],d=document.createElement("div");d.innerHTML=`<div>${o.title}</div> <div>${o.description}</div> \n            <div>${o.dueDate}</div> ${o.priority} <div><input type="checkbox"\n            id="completed" value="completed"></div> `,e.appendChild(d)}}(),document.querySelector("#todoTitleInput").value="",document.querySelector("#todoDescriptionInput").value="",document.querySelector("#dueDateInput").value="",document.querySelector("#priorityInput").value=""):alert("All values must be filled out")};(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","pageContent");const n=document.createElement("div");n.setAttribute("id","todoHeading");const o=document.createElement("h2");o.innerHTML="Title",n.appendChild(o);const d=document.createElement("h2");d.innerHTML="Description",n.appendChild(d);const i=document.createElement("h2");i.innerHTML="Due Date",n.appendChild(i);const c=document.createElement("h2");c.innerHTML="Priority",n.appendChild(c);const l=document.createElement("h2");l.innerHTML="Completed Status",n.appendChild(l);const u=document.getElementById("todos");t.appendChild(u);const p=document.createElement("h1");p.textContent="Todo App",e.appendChild(p),t.appendChild(n),e.appendChild(t)})(),(()=>{const e=document.querySelector("#content"),t=document.getElementById("pageContent");t.classList.add("pageContent");const o=document.createElement("div");o.setAttribute("id","addTodoContent");const d=document.createElement("h2");d.setAttribute("id","pageTitle"),d.textContent="Add Todo",t.appendChild(d);const i=document.createElement("form");i.setAttribute("id","addTodoForm"),i.classList.add("addTodoForm");const c=document.createElement("h2");c.textContent="Enter the title of your todo.",i.appendChild(c);const l=document.createElement("input");l.setAttribute("id","todoTitleInput"),l.type="text",l.placeholder="Todo Title",i.appendChild(l);const u=document.createElement("h2");u.textContent="Enter the description of your todo.",i.appendChild(u);const p=document.createElement("input");p.setAttribute("id","todoDescriptionInput"),p.type="text",p.placeholder="Todo Description",i.appendChild(p);const r=document.createElement("h2");r.textContent="Enter the due date.",i.appendChild(r);const a=document.createElement("input");a.setAttribute("id","dueDateInput"),a.type="text",a.placeholder="Due Date",i.appendChild(a);const m=document.createElement("h2");m.textContent="What is the priority level?",i.appendChild(m);const s=document.createElement("select");s.setAttribute("id","priorityInput"),i.appendChild(s);const h=document.createElement("option");h.innerText="",h.value="",s.appendChild(h);const C=document.createElement("option");C.innerText="Low",C.value="Low",s.appendChild(C);const E=document.createElement("option");E.innerText="Medium",E.value="Medium",s.appendChild(E);const v=document.createElement("option");v.innerText="High",v.value="High",s.appendChild(v);const y=document.createElement("button");y.type="button",y.addEventListener("click",n),y.setAttribute("id","submitButton"),y.innerHTML="Add Todo",i.appendChild(y),o.appendChild(i),t.appendChild(o),e.appendChild(t)})()})();