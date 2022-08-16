var mainForm = document.forms.main;

var mainFormInput = mainForm.userName;

//var main = mainForm.val()

var btn = mainForm.btn;


	if (mainFormInput.charCodeAt < 65 && mainFormInput.charCodeAt > 122) {
		
btn.addEventListener('click', function () {
		alert("true")
		
		
});

	}else{
		alert("false")
	}


