/*<div id="menu">
<h1>Menu</h1>
<div>We have mashed potatoes!</div>
<p>That's it.</p>
<p>I only sell mashed potatoes.</p>
</div>
<div id="contact">
<h1>Contact</h1>
<p>Potatoes not fresh? Come fill up our feedback form at this link!</p>
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Get help here</a>
</div> */

const home = (function(){
  const div = document.createElement('div');
  const header = document.createElement('h1');
  header.textContent = 'My Cool Restaurant';
  const p1 = document.createElement('p');
  p1.textContent = 'My restaurant is cool!'
  const p2 = document.createElement('p');
  p2.innerHTML = 'We have very <strong>nice</strong> food.'
  div.append(header, p1, p2);
  return div;
})();

const menu = (function(){
  const div = document.createElement('div');
  const header = document.createElement('h1');
  header.textContent = 'Menu';
  const h2 = document.createElement('h2');
  h2.textContent = 'We only serve mashed potatoes';
  const p = document.createElement('p');
  p.textContent = "That's it";
  div.append(header, h2, p);
  return div;
})();

const contact = (function(){
  const div = document.createElement('div');
  const header = document.createElement('h1');
  header.textContent = 'Contact';
  const p = document.createElement('p');
  p.textContent = "Potatoes not fresh? Come fill up our feedback form at this link!";
  const a = document.createElement('a');
  a.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  a.textContent = 'Get help here.'
  div.append(header, p, a);
  return div;

})();

const nav = (function(){
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const goHome = document.createElement('li');
  goHome.onclick = makeListener(home);
  goHome.textContent = 'Home';
  const goMenu = document.createElement('li');
  goMenu.onclick = makeListener(menu);
  goMenu.textContent = 'Menu';
  const goContact = document.createElement('li');
  goContact.onclick = makeListener(contact);
  goContact.textContent = 'Contact'
  ul.append(goHome, goMenu, goContact);
  nav.append(ul);
  return nav;
})();

const body = document.querySelector('body');
body.prepend(nav);
const container = document.querySelector("#content");

function emptyContainer(){
  const container = document.querySelector("#content");
  while (container.firstChild){
    container.removeChild(container.firstChild);
  }
}

function makeListener(div){
  return () => {
    emptyContainer();
    container.append(div);
  }
}

container.append(home);