
function cleanText() {

    var text = document.getElementById("chatText").value;
    var newText = "";
    var line;
    var re = new RegExp("From(?= .*? to .*?:)")
    for (line of text.split(re)) {
        if (RegExp('\(Privately\)').test(line) == false) {    
            if (line.length>0) {
                line = line.replace(' to Everyone:','');
                line = line.replace('M)', 'M):</span><br>');
                line = '<span class="strong">'+line;
                newText += line + "<br><br>";
            }
        }
    }
    document.getElementById("cleanedText").innerHTML = newText;
    var x = document.getElementById("cleaned");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


function copyText() {
    var copyText = document.getElementById("cleanedText");
    alert(copyText)
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    alert("Cleaned text copied to clipboard!");
  }


  function copyFormatted (html) {
    // Create container for the HTML
    // [1]
    var container = document.createElement('div')
    container.innerHTML = html
  
    // Hide element
    // [2]
    container.style.position = 'fixed'
    container.style.pointerEvents = 'none'
    container.style.opacity = 0
  
    // Detect all style sheets of the page
    var activeSheets = Array.prototype.slice.call(document.styleSheets)
      .filter(function (sheet) {
        return !sheet.disabled
      })
  
    // Mount the container to the DOM to make `contentWindow` available
    // [3]
    document.body.appendChild(container)
  
    // Copy to clipboard
    // [4]
    window.getSelection().removeAllRanges()
  
    var range = document.createRange()
    range.selectNode(container)
    window.getSelection().addRange(range)
  
    // [5.1]
    document.execCommand('copy')
  
    // [5.2]
    for (var i = 0; i < activeSheets.length; i++) activeSheets[i].disabled = true
  
    // [5.3]
    document.execCommand('copy')
  
    // [5.4]
    for (var i = 0; i < activeSheets.length; i++) activeSheets[i].disabled = false
  
    // Remove the container
    // [6]
    document.body.removeChild(container)
  }
  