$(function(){

	$('.menu-btn').on('click',function(){
	
		$('.navigat').slideToggle(300,function(){
	
		  if($(this).css('display')==='none'){
			  $(this).removeAttr('style');
		  }
		});
	});
	});


	$(function(){

		$('#social-btn').on('click',function(){
		
			$('.soc').slideToggle(300,function(){
		
				if($(this).css('display')==='none'){
					$(this).removeAttr('style');
				}
			});
		});
		});


var tox = "string";


switch (tox) {
	case "number":
		document.write("popoxakan number arjeqov");
		break;
   
	case "string":
		document.write("popoxakan string arjeqov");
		break;
	
	case "boll":
		document.write("popoxakan boll arjeqov");
		break;	
	default:
		document.write("default");
		break;
}

