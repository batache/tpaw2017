function validation(){
	
	
	
	var nom= document.getElementById("nom").value;
	
	
	var prenom=document.getElementById("prenom").value;
	var date=document.getElementById("date").value;
	var adress=document.getElementById("adr").value;
	var email=document.getElementById("mail").value;
	
	
	if(nom == '' || prenom=="" || date=="" || adress=="" || email=="") {
		$(".modal-body").html("La saisie du nom est obligatoire")
	  	$('.modal').modal('show');
	}
    	else if ((nom.length>=5)&&(prenom.length>=5)&& (date.length>=5)&&(adress.length>=5)&& (email.length>=5)){	    
	    	$(".modal-body").html("Bienvenue jony "+prenom)
	  	$('.modal').modal('show');
    	}
	else{
		$(".modal-body").html("La saisie du nom est obligatoire")
		$('.modal').modal('show');
	}
}
