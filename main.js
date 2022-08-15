const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';



const para = document.createElement('p');
para.style.cssText = "color: red";
para.textContent = "Hi! I'm Red!!";

const hThree = document.createElement('h3');
hThree.style.cssText = "color: blue";
hThree.textContent = "I'm a blue h3";


/*h1, and p- children of div */

const secondDiv = document.createElement('div');
secondDiv.setAttribute('style', 'background-color:pink; border: 1px solid black;');

const secondH = document.createElement('h1');
secondH.textContent = "I'm in a div";

const secondP = document.createElement('p');
secondP.textContent = "ME TOO!";

const btn = document.createElement('button');
btn.textContent = "click me HARD";
btn.addEventListener('click', function(e){
    console.log(e.target);
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

container.appendChild(btn);
container.appendChild(content);
content.appendChild(para);
content.appendChild(hThree);
    secondDiv.appendChild(secondH);
    secondDiv.appendChild(secondP);
content.appendChild(secondDiv);
