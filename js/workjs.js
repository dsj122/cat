
$(document).ready(function(){
		
		$("#catlife").slideDown("slow");
		$("#chuans").click(function(){
			$("#cathjump").fadeToggle("slow");
			
			$("#first50").toggle(function(){
				$("#first50").animate({width:'100%'},"fast");
			})
			
		})
		$(".tabb").slideDown("slow");
		
})
