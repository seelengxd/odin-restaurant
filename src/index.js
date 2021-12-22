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

const container = document.querySelector("#content");
console.log(container);
container.append(home, menu, contact)