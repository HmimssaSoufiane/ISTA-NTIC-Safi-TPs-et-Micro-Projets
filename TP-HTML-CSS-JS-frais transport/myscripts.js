function test(){
				var a=true;var regex=/^[A-Z]{2}[0-9]{3}$/i;	
				if(document.F.N[0].value==''){
					document.getElementById('erreurColis').innerHTML="Erreur remplir le champ.";
					a=false;
				}
				else if(!regex.test(document.F.N[0].value))
				{		
					document.getElementById('erreurColis').innerHTML="Numéro de colis doit etre composé deux lettre et trois chiffres.";a=false;
				}

				if(!document.F.R[0].checked && !document.F.R[1].checked)
				{
						document.getElementById('erreur').innerHTML="choisir le Mode de trasport.";a=false;
				}
				if(isNaN(document.F.N[1].value)){
					document.getElementById('erreurDis').innerHTML="Saisie uniquement les chiffres";a=false;
				}
				else if(document.F.N[0].value=='')
				{
					document.getElementById('erreurDis').innerHTML="Erreur remplir le champ (la distance).";a=false;
				}
				
				if(isNaN(document.F.N[2].value))
				{
					document.getElementById('erreurDis2').innerHTML="Saisie uniquement les chiffres.";a=false;

				}else if(document.F.N[0].value==''){document.getElementById('erreurDis2').innerHTML="Erreur remplir le champ(Poids).";a=false;}
				if (a==true)calcule();

		} 
		function calcule(){
			if(document.F.R[0].checked){
				if((document.F.N[2].value)<10){document.F.T.value=(document.F.N[1].value)*0.5*0.2;}
				if((document.F.N[2].value)>10){document.F.T.value=(document.F.N[1].value)*0.3*0.2;}
			}
			else{
				if((document.F.N[2].value)<10){document.F.T.value=(document.F.N[1].value)*0.5;}
				if((document.F.N[2].value)>10){document.F.T.value=(document.F.N[1].value)*0.3;}
			}
		}
