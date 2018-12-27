$(document).ready( function () {//Sav jQuery kod cemo pisati unutar ready funk. jer zelimo da se kod izvrsava tek nakon sto html bude ucitan
    //Ovdje cemo dodati waypoints jquery code za scroll-ovanje sa lepljivom navigacijom:
    
    //For the sticky navigation: 
    $('.js--section-features').waypoint (function(direction) { /*direction je waypoint parametar koji koristimo da odredimo smjer scroll-a i sta da se desi kada scroll-uejmo u tom smjeru*/
        if(direction == "down") {//"down" je waypoint smjer
            $('nav').addClass('sticky');/*nav je jquery elem. kojem dodajemo klasu sticky a brisemo je rucno iz html tag-a nav jer cemo je dodavati i brisati kako scroll-ujemo zbog vidljivosti i nevidljivosti sticky navigacije iz css-a*/
        } else {
            $('nav').removeClass('sticky');/* ako ne scroll-ujemo dole ili ne radimo nista - brisemo klasu sticky i onda nam tako ostaje glavni main-nav sa pocetka kursa*/
        }
        
        
    }, { offset: '75px;' });/* offset je jos jedna osobina waypoint biblioteke gdje moze da naznacimo na kolikoj razdaljini prije navedene sekcije da se pojavi sticky navigacija */
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function(){//Kada kliknemo na dugme sa navedenom klasom izvrsit ce se funkcija...
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);/*Da bi mogli izvrsiti animaciju od 1 sec sa scroll-om kada kliknemo moramo  selektovati cijeli html i body element nakon cega navodimo do kojeg elem. da se scroll-uje sa scrollTop-om sto znaci scroll to the top a zatim kao drugi param. navodimo broj milisekundi*/
    });
    
    $('.js--scroll-to-start').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    /*Navigation scroll*/
    $(function() {//Ovdje smo skinuli neki code sa css-trics za smooth-scrolling navigaconih linkova do određenih sekcija kojim dajemo id a onda taj id povzujemo sa href="id" da kada kliknemo da nas odvede do sekcije
      $('a[href*="#"]:not([href="#"])').click(function() {//Selektuje link elem. koji pocinje sa #
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {//ako id tog elem. postoji onda ce nas scroll-ovati ka njemu u 1 sekundi
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
   });
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {/*Korisitmo opet waypoint jquery ali direkciju necemo koristiti zato sto ce se animacija samo 1 desiti prilikom otvaranja sajta u browseru ili refresha*/        
        $('.js--wp-1').addClass('animated fadeIn');/* Ciljamo elem. koji ima klasu .js--wp-1 i dodajemo mu klasu za css animacije animated i koju animaciju zelimo npr. fadeIn */
    }, { offset: '50%' });//da fadeIn pocne na polovini sekcije ispred elem. sa klasom .js--wp-1 a to je drugi red u ovoj sekciji
    
     $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
       }, { offset: '50%' });
    
    $('.js--wp-2').waypoint(function(direction) {//slika sa Mobitelom u odjeljku steps
        $('.js--wp-2').addClass('animated fadeInUp');
       }, { offset: '50%' });
    
    $('.js--wp-3').waypoint(function(direction) {//Gradovi
        $('.js--wp-3').addClass('animated fadeIn');
       }, { offset: '50%' });
    
    $('.js--wp-4').waypoint(function(direction) {//Pricing ili Sign-up plans
        $('.js--wp-4').addClass('animated pulse');
       }, { offset: '50%' });
    
    /* Mobile nav */
    $('.js--nav-icon').click(function() {
        
        var nav = $('.js--main-nav');/*da ne ponavljamo stalno code stavili smo ga u prom. koju cemo koristiti*/ 
        var icon = $('.js--nav-icon i');/*ikona unutar elem. koji ima klasu .js--nav-icon*/
        
        nav.slideToggle(200);/*0.2 sec.*/
        
        if(icon.hasClass('ion-navicon-round')) { /*ako elem. koji smo selekt. tj. i ima klasu .ion-navicon.round onda...*/
            icon.addClass('ion-close-round');/*...dodajemo mu ovu klasu*/
            icon.removeClass('ion-navicon-round'); /*a brisemo staru*/
        } else {
            icon.addClass('ion-navicon-round');/*radimo obrnuto*/
            icon.removeClass('ion-close-round'); 
        }
        
    });
    
    
});//Kraj ready funkcije
