// Generate QR Code Image

function convertToPixels(length) {
    // Check if the length contains units (e.g., "em", "rem", "px")
    var hasUnits = /[a-zA-Z]+/.test(length);
    
    if (hasUnits) {
      // Create a temporary element for converting units
      var temp = document.createElement("div");
      temp.style.width = "1" + length;
  
      // Append the element to the document body
      document.body.appendChild(temp);
  
      // Get the calculated width in pixels
      var pixels = temp.offsetWidth;
  
      // Remove the temporary element
      document.body.removeChild(temp);
      console.log(pixels);
      return pixels;
    } else {
      // No units specified, return the input as is
      return parseInt(length);
    }
  }

function generateQRCode(
    elementId, 
    data="ARIJIT BHOWMICK", 
    width = 1000, 
    height = 1000,
    color = {
        dark: "#000000",
        light: "#ffffff",
    }
) {
    var element = document.getElementById(elementId);
    if (element && element.hasChildNodes()) {
      return;
    }

    console.log("in QR", color);
    var qrcode = new QRCode(element, {
      width: width,
      height: height,
      color: color,
    });
  
    // Generate the QR code image
    qrcode.makeCode(data);
};

// function generateQRCode(data="ARIJIT BHOWMICK", width = 1000, height = 1000) {

//     var qrcode = new QRCode(element, {
//       width: width,
//       height: height,
//     });
  
//     // Generate the QR code image
//     qrcode.makeCode(data);
// };

function load_qr_codes() {

    // Create all qr codes starting with the id : div[id^="qr-img-"]
    const qr_elements = document.querySelectorAll('div[id^="qr-img-"]');

    var qr_height = 250;
    var qr_width = 250;
    var color = {
        dark: "#000000",
        light: "#ffffff",
    };

    for (let i = 0; i < qr_elements.length; i++) {
        if (qr_elements[i].getAttribute("dimension")){
            var dimension = qr_elements[i].getAttribute("dimension").split("x");
            // Format : "200Hx200W" or "10emHx10emW" or ...
            console.log(dimension);
            for (let side_len_str of dimension) {
                if (side_len_str.slice(-1).toLowerCase() == "h"){

                    qr_height=convertToPixels(side_len_str.slice(0, -1));
                }
                else if (side_len_str.slice(-1).toLowerCase() == "w"){
                    qr_width=convertToPixels(side_len_str.slice(0, -1));
                }
                    
            }
            
        }
        if (qr_elements[i].getAttribute("colors")){
            
            var color_scheme = qr_elements[i].getAttribute("colors").split("x");
            // Format : "#ffffLx#0000D" or "whiteLxblackD" or ...

            console.log(color_scheme);
            
            for (let color_str of color_scheme) {
                
                if (color_str.slice(-1).toLowerCase() == "l"){
                    console.log("light", color);
                    color.light=color_str.slice(0, -1);
                }
                else if (color_str.slice(-1).toLowerCase() == "d"){
                    color.dark=color_str.slice(0, -1);
                }
                    
            }
            
        }
        console.log(color);
        
        generateQRCode(
            elementId=qr_elements[i].id, 
            data=qr_elements[i].getAttribute("data"), 
            width=qr_width, 
            height=qr_height,
            color=color,
        );
    }

};
  
window.onload = function() {
    console.log("Loading QR CODES");
    setTimeout(function() {
        load_qr_codes();
    }, 1000);
    console.log("Loaded QR CODES");
}