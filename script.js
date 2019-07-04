        let br = 0;
		let art_btn1 = document.getElementsByClassName("art_btn1");
		let art_btn2 = document.getElementsByClassName("art_btn2");
		let art_div = document.getElementsByClassName("art_div");

		showSlides();

		function showSlides(){
			
			let i;
			let slide = document.getElementsByClassName("mySlides");
			let dots = document.getElementsByClassName("dot");

			for(i=0; i<slide.length; i++){
				slide[i].style.display = "none";
			}
			for(i=0; i<dots.length; i++){
				dots[i].className = dots[i].className.replace(" active", "");
			}

			br++;

			if(br > slide.length) {br = 1}
			slide[br-1].style.display = "block";
			dots[br-1].className += " active";
			setTimeout(showSlides, 2000);
		}

		for(let i=0; i<art_btn1.length; i++){
			art_btn1[i].onclick = function(){

				if(art_div[i].style.display == "block"){
					art_div[i].style.display = "none";
					art_btn1[i].className = art_btn1[i].className.replace(" active1", "");
					
				}else{
					art_div[i].style.display = "block";
					art_btn1[i].className += " active1";
				}
			}
		}

		

		let navbar = document.getElementById("navbar");
		let sideNavbar = document.querySelector("#sideNavbar");
		let kontakt = document.getElementById("contact");
		let o_nama = document.getElementById("about");
		let asd = document.getElementById("onamaidalje");

		let sticky = navbar.offsetTop;

		let modal = document.getElementById("modal");

		let con_modal = document.getElementsByClassName("contact_modal")[0];
		let phone = document.getElementsByClassName("fas")[0];
		let close = document.getElementsByClassName("close")[0];

		function myFunction() {
		  if (window.pageYOffset >= sticky+40 && window.innerWidth > 750) {
			sideNavbar.style.display = "block";	
		    
		  } else {
			sideNavbar.style.display = "none";
		  }
		}

        
        window.onscroll = function() {myFunction()};

		

		phone.onclick = function(){
			con_modal.style.display = "block";
		}
		window.onclick = function(){
			if(event.target == con_modal){
				con_modal.style.display = "none";
			}
		}
		close.addEventListener("click", function(){
			con_modal.style.display = "none";
		});


		let racun = document.getElementById("racun");
		let iznosRacuna = 0;
		let pica = document.getElementsByClassName("pica");
		let velicina = document.getElementsByClassName("velicina");
		let dodaci = document.getElementsByClassName("dodaci");
		let btn = document.getElementById("btn");


        function funkcija(){
        	let cena1 = 0;
        	let cena2 = 0;
        	let cena3 = 0;
        	let imePice = "";
        	let velicinaPice;
        	let dodatak = "";
        	iznosRacuna = 0;
        	let ispisRacuna = "";

        	for(let i=0; i<pica.length; i++){
        		if(pica[i].checked){
        			cena1 += parseInt(pica[i].getAttribute("data-cena"));
        			imePice = pica[i].getAttribute("value");
        		}
        	}

            for(let j=0; j<velicina.length; j++){
        		if(velicina[j].checked){
        			cena2 += parseInt(velicina[j].getAttribute("data-cena"));
        			velicinaPice = velicina[j].getAttribute("value");
        		}
           	}

           	for(let k=0; k<dodaci.length; k++){
           		if(dodaci[k].checked){
           			cena3 += parseInt(dodaci[k].getAttribute("data-dodatak"));
           			dodatak += `, ${dodaci[k].getAttribute("value")}`;
           		}
           	}    	

        	iznosRacuna = cena1 + cena2 + cena3;
        	racun.innerHTML = iznosRacuna;
        	ispisRacuna = `${imePice}, ${velicinaPice} cm${dodatak}`;




        	btn.onclick = function(){
        		let vreme = Math.floor(Math.random() * (45 - 20) ) + 20;
			  	let tmp = prompt("Unesite adresu i broj telefona:");
			  	if (tmp == null || tmp == "") {
			    	alert("Korisnik nije uneo tražene podatke.");
			  	} else {
			    	alert(`Vaša porudžbina stiže za ${vreme} min.\n${ispisRacuna}`);
			  	}
        	}
		}
		
		
		let menuIcon = document.getElementById("menuIconDiv");
		let modalMenu = document.getElementById("modalMenu");

		menuIcon.addEventListener("click", function(){
			
			menuIcon.classList.toggle("change");
			if(modalMenu.style.display == "block"){
				modalMenu.style.display = "none";
			}else{
				modalMenu.style.display = "block";
			}
			
		});


        

        
        
