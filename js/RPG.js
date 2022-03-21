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
	
	
 $("#namaste").click(function(){ 
	$("#prognamaste").addClass("panel-active");
	$("#prognamaste").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");

	$("#aapkibeti").addClass("button-active");
	$("#aapkibeti").removeClass("button-latent");
	});
	
 $("#aapkibeti").click(function(){ 
	$("#progaapkibeti").addClass("panel-active");
	$("#progaapkibeti").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");

	$("#choriki").addClass("button-active");
	$("#choriki").removeClass("button-latent");
	$("samaybeeta").addClass("button-active");
	$("#samaybeeta").removeClass("button-latent");
	});

$("#choriki").click(function(){ 
	$("#pickedchoriki").addClass("panel-active"); 
	$("#pickedpchoriki").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#samaybeeta").addClass("button-latent");
	$("#samaybeeta").removeClass("button-active");
	  
	$("#sahinahi").addClass("button-active");
	$("#sahinahi").removeClass("button-latent");
	$("#dekhtahun").addClass("button-active");
	$("#dekhtahun").removeClass("button-latent");
	$("#shaitannahi").addClass("button-active");
	$("#shaitannahi").removeClass("button-latent");
	});

$("#samaybeeta").click(function(){ 
	$("#pickedsamaybeeta").addClass("panel-active"); 
	$("#pickedsamaybeeta").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#choriki").addClass("button-latent");
	$("#choriki").removeClass("button-active");
	  
	$("#sahinahi").addClass("button-active");
	$("#sahinahi").removeClass("button-latent");
	$("#dekhtahun").addClass("button-active");
	$("#dekhtahun").removeClass("button-latent");
	$("#shaitannahi").addClass("button-active");
	$("#shaitannahi").removeClass("button-latent");
	});	

 $("#sahinahi").click(function(){ 
	$("#pickedsahinahi").addClass("panel-active");
	$("#pickedsahinahi").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#dekhtahun").addClass("button-latent");
	$("#dekhtahun").removeClass("button-active");
	$("#shaitannahi").addClass("button-latent");
	$("#shaitannahi").removeClass("button-active");
	  
	$("#family2").addClass("button-active");
	$("#family2").removeClass("button-latent");
	});
	
 $("#dekhtahun").click(function(){ 
	$("#pickeddekhtahun").addClass("panel-active");
	$("#pickeddekhtahun").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#sahinahi").addClass("button-latent");
	$("#sahinahi").removeClass("button-active");
	$("#shaitannahi").addClass("button-latent");
	$("#shaitannahi").removeClass("button-active");
	  
	$("#family3").addClass("button-active");
	$("#family3").removeClass("button-latent");
	});

 $("#shaitannahi").click(function(){ 
	$("#pickedshaitannahi").addClass("panel-active");
	$("#pickedshaitannahi").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#dekhtahun").addClass("button-latent");
	$("#dekhtahun").removeClass("button-active");
	$("#sahinahi").addClass("button-latent");
	$("#sahinahi").removeClass("button-active");
	  
	$("#family4").addClass("button-active");
	$("#family4").removeClass("button-latent");
	});
	
});



