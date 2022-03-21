$(document).ready(function(){
  $("#hindi").click(function(){ 
	$("#pickedhindi").addClass("panel-active");
	$("#pickedhindi").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#english").addClass("button-latent");
	$("#english").removeClass("button-active");
	  
	$("#traveltoA1").addClass("button-active");
	$("#traveltoA1").removeClass("button-latent");
	});
	
  $("#english").click(function(){ 
	$("#pickedenglish").addClass("panel-active"); 
	$("#pickedenglish").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#hindi").addClass("button-latent");
	$("#hindi").removeClass("button-active");
	  
	$("#traveltoA1").addClass("button-active");
	$("#traveltoA1").removeClass("button-latent");
	});
	
  $("#revivehim").click(function(){ 
	$("#revivedhim").addClass("panel-active");
	$("#revivedhim").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#payfamily").addClass("button-latent");
	$("#payfamily").removeClass("button-active");
	});
	
  $("#payfamily").click(function(){ 
	$("#paidfamily").addClass("panel-active"); 
	$("#paidfamily").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#revivehim").addClass("button-latent");
	$("#revivehim").removeClass("button-active");
	});	
		
  $("#acceptgoods").click(function(){ 
	$("#acceptedgoods").addClass("panel-active");
	$("#acceptedgoods").removeClass("panel-latent");
	  
	$(this).addClass("button-latent");
	$(this).removeClass("button-active");
	$("#imallergic").addClass("button-latent");
	$("#imallergic").removeClass("button-active");
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
