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

document.addEventListener("DOMContentLoaded", function () {
    var donateLinks = document.querySelectorAll(".donate-item-link");
  
    donateLinks.forEach(function (link) {
      link.addEventListener("mouseover", function () {
        var linkId = this.id.slice(0, this.id.lastIndexOf("-"));
        // console.log(linkId);
        var descriptionClass = linkId + "-description";
        // console.log(descriptionClass);
        var descriptionElement = document.querySelector("." + descriptionClass);
        // console.log(descriptionElement);
        if (descriptionElement) {
          descriptionElement.style.display = "block";
        }
      });
      
      link.addEventListener("mouseout", function () {
        var linkId = this.id.slice(0, this.id.lastIndexOf("-"));
        var descriptionClass = linkId + "-description";
        var descriptionElement = document.querySelector("." + descriptionClass);
        // console.log(linkId);
        if (descriptionElement) {
          descriptionElement.style.display = "none";
        }
      });
    });
  });