// $(document).ready(function() {
//   $('.donate-item-link').hover(function() {
//     var linkId = $(this).attr('id');
//     linkId = linkId.slice(0, linkId.lastIndexOf("-"));
//     var descriptionClass = linkId + '-description';
//     $('.' + descriptionClass).show();
//   }, function() {
//     var linkId = $(this).attr('id');
//     linkId = linkId.slice(0, linkId.lastIndexOf("-"));
//     var descriptionClass = linkId + '-description';
//     $('.' + descriptionClass).hide();
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     var donateLinks = document.querySelectorAll(".donate-item-link");
  
//     donateLinks.forEach(function (link) {
//       link.addEventListener("mouseover", function () {
//         var linkId = this.id.slice(0, this.id.lastIndexOf("-"));
//         // console.log(linkId);
//         var descriptionClass = linkId + "-description";
//         // console.log(descriptionClass);
//         var descriptionElement = document.querySelector("." + descriptionClass);
//         // console.log(descriptionElement);
//         if (descriptionElement) {
//           descriptionElement.style.display = "block";
//         }
//       });
      
//       link.addEventListener("mouseout", function () {
//         var linkId = this.id.slice(0, this.id.lastIndexOf("-"));
//         var descriptionClass = linkId + "-description";
//         var descriptionElement = document.querySelector("." + descriptionClass);
//         // console.log(linkId);
//         if (descriptionElement) {
//           descriptionElement.style.display = "none";
//         }
//       });

//       link.addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent the link from navigating to another page
//         var linkId = this.id.slice(0, this.id.lastIndexOf("-"));
//         // console.log(linkId);
//         var descriptionClass = linkId + "-description";
//         // console.log(descriptionClass);
//         var descriptionElement = document.querySelector("." + descriptionClass);
//         // console.log(descriptionElement);
//         if (descriptionElement) {
//           descriptionElement.style.display = "block";
//         }
//       });
        
//     });
//   });

///////////////////////////////

// document.addEventListener("DOMContentLoaded", function () {
//   var donateLinks = document.querySelectorAll(".donate-item-link");

//   donateLinks.forEach(function (link) {
//     var clicked = false;

//     link.addEventListener("mouseover", function () {
//       var linkId = this.id.slice(0, this.id.lastIndexOf("-"));
//       var descriptionClass = linkId + "-description";
//       var descriptionElement = document.querySelector("." + descriptionClass);

//       if (!clicked && descriptionElement) {
//         descriptionElement.style.display = "block";
//       }
//     });

//     link.addEventListener("mouseout", function () {
//       if (!clicked) {
//         var linkId = this.id.slice(0, this.id.lastIndexOf("-"));
//         var descriptionClass = linkId + "-description";
//         var descriptionElement = document.querySelector("." + descriptionClass);

//         if (descriptionElement) {
//           descriptionElement.style.display = "none";
//         }
//       }
//     });

//     link.addEventListener("click", function (event) {
//       event.preventDefault();
//       clicked = true; // Mark the link as clicked
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var donateLinks = document.querySelectorAll(".donate-item-link");
  var div_display_toggle = document.querySelectorAll(".donate-description-div-display-toggle");
  var activeDescription = null;


  div_display_toggle.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var btnId = this.id.slice(0, this.id.lastIndexOf("-"));
      var descriptionClass = btnId + "-description";
      var newDescription = document.querySelector("." + descriptionClass);

      if (activeDescription) {
        activeDescription.style.display = "none";
      }

      if (newDescription === activeDescription) {
        activeDescription = null;
      } else {
        newDescription.style.display = "block";
        activeDescription = newDescription;
      }
    });
  });

  donateLinks.forEach(function (link) {


    link.addEventListener("mouseover", function () {
      if (!activeDescription) {
        var linkId = this.id.slice(0, this.id.lastIndexOf("-"));
        var descriptionClass = linkId + "-description";
        var descriptionElement = document.querySelector("." + descriptionClass);

        if (descriptionElement) {
          descriptionElement.style.display = "block";
        }
      }
    });

    link.addEventListener("mouseout", function () {
      if (!activeDescription) {
        var linkId = this.id.slice(0, this.id.lastIndexOf("-"));
        var descriptionClass = linkId + "-description";
        var descriptionElement = document.querySelector("." + descriptionClass);

        if (descriptionElement) {
          descriptionElement.style.display = "none";
        }
      }
    });

    link.addEventListener("click", function (event) {
      event.preventDefault();
      var linkId = this.id.slice(0, this.id.lastIndexOf("-"));
      var descriptionClass = linkId + "-description";
      var newDescription = document.querySelector("." + descriptionClass);

      if (activeDescription) {
        activeDescription.style.display = "none";
      }

      if (newDescription === activeDescription) {
        activeDescription = null;
      } else {
        newDescription.style.display = "block";
        activeDescription = newDescription;
      }
    });
  });
});
