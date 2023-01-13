document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("button_submit");

  submitButton.addEventListener("click", sendData);

  function sendData() {
    let params = {
      active: true,
      currentWindow: true,
    };
    chrome.tabs.query(params, gotTabs);
    function gotTabs(tabs) {

      const selected = document.getElementById("select_image");
      const selectedImage = selected.options[selected.selectedIndex].value;
      let message = {
        txt: "Hello",
        selectedImage: selectedImage,
      };
      chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
        console.log("Success");
      });
    }
  }
});
