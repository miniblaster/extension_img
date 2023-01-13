console.log("Running")

chrome.runtime.onMessage.addListener((request)=> {
  console.log(request)
  if (request.txt == "Hello") {
    selectAndReplace(request.selectedImage);
  }
});
function selectAndReplace(message) {
  let imgs = document.querySelectorAll("img");
  console.log(imgs)
  switch (message) {
    case "image1":
      for (imgElt of imgs) {
        let file = "images/a.png";
        let url = chrome.runtime.getURL(file);
        imgElt.src = url;
      }
      break;
    case "image2":
      for (imgElt of imgs) {
        let file = "images/b.png";
        let url = chrome.runtime.getURL(file);
        imgElt.src = url;
      }
      break;

    case "image3":
      for (imgElt of imgs) {
        let file = "images/panda.jpg";
        let url = chrome.runtime.getURL(file);
        imgElt.src = url;
      }
      break;
    case "image4":
      for (imgElt of imgs) {
        let file = "images/deer.jpg";
        let url = chrome.runtime.getURL(file);
        imgElt.src = url;
      }
      break;
    case "image5":
      for (imgElt of imgs) {
        let file = "images/rabbit.jpg";
        let url = chrome.runtime.getURL(file);
        imgElt.src = url;
      }
      break;
  }
}
