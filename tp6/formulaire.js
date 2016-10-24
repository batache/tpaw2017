

function validation(){
	
	var nom= document.getElementById("Nom").value;
    var prenom=document.getElementById("Prenom").value;

    var date=document.getElementById("datepicker").value;

    var adress=document.getElementById("Adresse").value;

    var email=document.getElementById("mail").value;

    

    

    if(nom == '' || prenom=="" || date=="" || adress=="" || email=="") {

        $(".modal-body").html("La saisie des champs est obligatoire")

          $('.modal').modal('show');

    }

       else if ((nom.length>=5)&&(prenom.length>=5)&& (date.length>=5)&&(adress.length>=5)&& (email.length>=5)){        
          
	     valide1 = false;
	
		for(var j=1;j<(email.length);j++){
			if(email.charAt(j)=='@'){
				if(j<(email.length-4)){
					for(var k=j;k<(email.length-2);k++){
						if(email.charAt(k)=='.') valide1=true;
					}
				}
			}
		}
		if(valide1==true){
	
            $(".modal-body").html('<img src="https://maps.googleapis.com/maps/api/staticmap?center='+adress+'&zoom=13&size=300x300&maptype=roadmap&markers='+adress+'"/>');

            $('.modal').modal('show');
		}else{
		 $(".modal-body").html("Le format du mail est incorrecte")

          $('.modal').modal('show');	
		}
       }

    else{

        $(".modal-body").html("veuillez remplir tous les champs svp!")

        $('.modal').modal('show');

    }
	
	
}
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
	$("#Adresse").val(latlon);
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&markers="+latlon+"&zoom=14&size=400x200&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }


}	
     
	



