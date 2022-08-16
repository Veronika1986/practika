// 'use strict'

// var isMobile = {
// 	Android: function() {
// 		 return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function() {
// 		 return navigator.userAgent.match(/BlackBerry/i);
// 	},
// 	iOS: function() {
// 		 return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},
// 	Opera: function() {
// 		 return navigator.userAgent.match(/Opera Mini/i);
// 	},
// 	Windows: function() {
// 		 return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function() {
// 		 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
// 	}
// };

// if (isMobile.any()) {
// 	document.body.classList.add('_touch');

// 	let menuArrows = document.querySelectorAll('.menu__arrow');
// 	if (menuArrows.length > 0) {
// 		for (let index = 0; index < menuArrows.length; index++) {
// 			const menuArrow = menuArrows[index];
// 			menuArrow.addEventListener("click",function(e){
// 				menuArrow.parentElement.classList.toggle('_active');
// 			})
// 		}
// 	}
// }else {
// 	document.body.classList.add('_pc');
// }

// //menu burger
// const menuBody = document.querySelector('.menu__body');
// const iconMenu = document.querySelector('.menu__icon');
// if (iconMenu) {

// 	iconMenu.addEventListener("click", function (e) {
// 		document.body.classList.toggle('_lock');
// 		iconMenu.classList.toggle('_active');
// 		menuBody.classList.toggle('_active');
// 	});
// }
// const inp = document.querySelector(form)
// for (i = 0; i < inp.length; i++) {
// 	if (inp.charCodeAt(i) < 1329 || inp.charCodeAt(i) > 1414) {
// 		console.log(inp.charAt(i) + "-ն գտնվում է Հայկական տառերի միջակայքից դուրս");
// 	}
// }
// function validateForm() {
// 	let x = document.forms["myForm"]["fname"].value;
// 	if (x) {
// 	  alert("Name must be filled out");
// 	  return false;
// 	}
//  }
// function highlight(x){

// 							document.forms[#description].elements[0].focus()

// 							document.forms[x].elements[0].select()

// 					}

var searchForm = document.forms["search"];
// выведем имя всех элементов
for (var i = 0; i < searchForm.elements.length; i++)
   document.write(searchForm.elements[i].name + "<br/>");

// получим по имени текстовое поле
var keyBox = searchForm.elements["key"];
document.write(keyBox.name); // key

var searchForm = document.forms["search"];
var keyBox = searchForm.elements["key"];
document.write(keyBox.value); // hello world
// установка значения
keyBox.value = "Привет мир";
