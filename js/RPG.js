$(document).ready(function(){
  $("#hindi").click(function(){ 
	$("#pickedhindi").addClass("panel-active");
	$("#pickedhindi").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#english").addClass("button-latent");
	$("#english").removeClass("button-active");
	  
	$("#hintraveltoA1").addClass("button-active");
	$("#hintraveltoA1").removeClass("button-latent");
	});
	
  $("#english").click(function(){ 
	$("#pickedenglish").addClass("panel-active"); 
	$("#pickedenglish").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#hindi").addClass("button-latent");
	$("#hindi").removeClass("button-active");
	  
	$("#engtraveltoA1").addClass("button-active");
	$("#engtraveltoA1").removeClass("button-latent");
	});

// hindi
  $("#wohmain").click(function(){ 
	$("#progwohmain").addClass("panel-active");
	$("#progwohmain").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");

	$("#problemkya").addClass("button-active");
	$("#problemkya").removeClass("button-latent");
	$("sahi").addClass("button-active");
	$("#sahi").removeClass("button-latent");
	});
	
  $("#problemkya").click(function(){ 
	$("#pickedproblemkya").addClass("panel-active"); 
	$("#pickedproblemkya").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#sahi").addClass("button-latent");
	$("#sahi").removeClass("button-active");
	  
	$("#traveltowada").addClass("button-active");
	$("#traveltowada").removeClass("button-latent");
	});	
		
  $("#sahi").click(function(){ 
	$("#pickedsahi").addClass("panel-active");
	$("#pickedsahi").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#problemkya").addClass("button-latent");
	$("#problemkya").removeClass("button-active");
	  
	$("#traveltowada").addClass("button-active");
	$("#traveltowada").removeClass("button-latent");
	});
	
  $("#imallergic").click(function(){ 
	$("#areallergic").addClass("panel-active"); 
	$("#areallergic").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#acceptgoods").addClass("button-latent");
	$("#acceptgoods").removeClass("button-active");
	});	
});

//english

