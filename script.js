function copyToClipboard() {
    /* Get the text from the input field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text inside the input field */
    copyText.select();
  
    /* Copy the selected text to the clipboard */
    document.execCommand("copy");
  
    /* Alert the user that the text has been copied */
    alert("Text copied to clipboard: " + copyText.value);