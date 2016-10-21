function validation(){
	
	$('.modal').modal('show');
	
	var nom= document.getElementById("nom").value;
	
	
	var prenom=document.getElementById("prenom").value;
	var date=document.getElementById("date").value;
	var adress=document.getElementById("adress").value;
	var email=document.getElementById("mail").value;
	
	
	if(nom == '' || prenom=="" || date=="" || adress=="" || email=="") 
	  document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
    else if ((nom.length>=5)&&(prenom.length>=5)&& (date.length>=5)&&(adress.length>=5)&& (email.length>=5))
		 document.getElementById("resultat").innerHTML = "Bienvenue jony "+prenom;
		else
			 document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
}
