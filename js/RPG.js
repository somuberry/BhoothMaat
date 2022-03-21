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
	
  $("#jichai1").click(function(){ 
	$("#progjichai").addClass("panel-active"); 
	$("#progjichai").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#jichai2").addClass("button-latent");
	$("#jichai2").removeClass("button-active");
	  
	$("#family1").addClass("button-active");
	$("#family1").removeClass("button-latent"); 
	$("#confront").addClass("button-active");
	$("#confront").removeClass("button-latent"); 
	});	

 $("#jichai2").click(function(){ 
	$("#progjichai").addClass("panel-active"); 
	$("#progjichai").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#jichai1").addClass("button-latent");
	$("#jichai1").removeClass("button-active");
	  
	$("#family1").addClass("button-active");
	$("#family1").removeClass("button-latent"); 
	$("#confront").addClass("button-active");
	$("#confront").removeClass("button-latent"); 
	});	
});



