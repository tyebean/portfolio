function myFunction() {
  /* Get the text field */
  const copyText = "hello"

  /* Select the text field */
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText("hello");


  /* Alert the copied text */

  console.log(copyText);
  alert("Copied the text: " + copyText);
}


function outFunc() {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

