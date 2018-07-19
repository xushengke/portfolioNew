(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var workImages = document.querySelectorAll('.lightboximage'),
       projectImage = document.querySelector('#GalightboxImg'),
       workName = document.querySelector('.Reworkname'),
       workInfo = document.querySelector('#workdesc'),
       workLink = document.querySelector('#worklink'),
       lightboxCon = document.querySelector('.Galightbox'),
       closeLightbox = document.querySelector('.close-lightbox'),
       workAddress = document.querySelector('#workaddress'),
       navigation = document.querySelector('#main-menu'),
       nav = navigation.querySelectorAll('a'),
       // promo = document.querySelector('#promoCon'),
       appliedClass;

       const httpRequest = new XMLHttpRequest();
       function getCarData() {
         const url = './lightbox.php?workname=' + this.id;

         fetch(url)
          .then((resp) => resp.json())
          .then((data) => { changeElements(data); })
          .catch(function(error) {
            console.log(error);
        });
          }



        function processRequest() {
          let reqIndicator = document.querySelector('.lightboximage');
          reqIndicator.textContent = httpRequest.readyState;
          debugger;

          if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) { // 200 means everything is awesome
              //debugger;
              let data = JSON.parse(httpRequest.responseText); //turn data into js project

              changeElements(data);
            } else {
              alert('There was a problem with the request.');
            }
          }
        }



       function changeElements(data) {
        const { work_name, work_image, work_description, work_link} = data;
        let workName = document.querySelector('.Reworkname').textContent = work_name;
        let workInfo = document.querySelector('#workdesc').innerHTML = work_description;
        let workLink = document.querySelector('#worklink').textContent = work_link;
        let projectImage = document.querySelector('#GalightboxImg').src = "images/" + work_image;
        let workAddress = document.querySelector('#workaddress').href = work_link;

        //this is the lightbox part


     }

        function lightboxPop(){
          Galightbox.style.display = "block";
          document.body.style.overflow = "hidden";
          window.scrollTo(0, 0);
        }

        function closelightbox() {
          Galightbox.style.display = "none";
          projectImage.removeAttribute('src');
          document.body.style.overflow = "";
          TweenLite.to(window, .3, {scrollTo:{y:"#works", offsetY:80}});
        }


        function scrollto(evt) {
          let number = this.id;
          evt.preventDefault();
          TweenLite.to(window, .5, {scrollTo:{y:".section" + number}});

        }


      //listeners
       nav.forEach(function(element) {
       element.addEventListener('click', scrollto, false);

     });


       workImages.forEach(function(element, index) {
    // loop through the images and add event handling to each one
       element.addEventListener('click', getCarData, false);
  });

       workImages.forEach(function(element){
       element.addEventListener('click', lightboxPop, false);
  });


       closeLightbox.addEventListener('click', closelightbox, false);

})();
