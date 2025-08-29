1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById can receive only id,getElementClassName can receive only calss,but by using querySelector, we can work with tag,class,id.
querySelector / querySelectorAll -> ququerySelector can accept only one DOM Elements on the other hand querySelectorAll can receive all the DOM Elements these have the same name.


2.How do you create and insert a new element into the DOM?

using document.createElement(""), we can easily creates a DOM.And by using element.appendChild("") we can insert DOM;
In my todays assignment I also use these"    


    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let h11 = document.createElement("h1");
    let div3 = document.createElement("div");
    
    h1.innerHTML = serviceNamevar.innerHTML;
    h2.innerHTML = serviceNumbervar.innerHTML;
    div2.appendChild(h1)
    div2.appendChild(h2)
    let time = new Date();
    let currentTime = time.toLocaleTimeString();
    
    h11.innerHTML = currentTime;
    div3.appendChild(h11);

    div.appendChild(div2);
    div.appendChild(div3);
    "




4.What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a special technology of JavaScript .By the help of this technology, we just use parent tag, and get all the child DOM element.
<ul>
<li></li>
<li></li>
<li></li>
</ul>
Using evnt Delegation,we just use a foreach loop in "ul" tag , thereby we can get all the child's DOM object.


5.What is the difference between preventDefault() and stopPropagation() methods?

preventDefault function just stop the default functionalites of the browser.
On the other hand,stopPropagation function helps developers to stop Propagation(like:Bubbling up)