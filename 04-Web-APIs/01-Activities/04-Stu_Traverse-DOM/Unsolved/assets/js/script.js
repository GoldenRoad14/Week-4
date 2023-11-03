// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');
console.log(articlesDiv.children);
console.log(headerDiv.children);
// Change style by accessing style object's properties
articlesDiv.children[0].children[0].style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';

