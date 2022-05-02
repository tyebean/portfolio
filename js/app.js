
const alertSuccess = document.querySelector("alert-success")
const alertFail = document.querySelector("danger-success")
const gmailButton = document.querySelector("gmail-button")
const discordButton = document.querySelector("discord-button")
const gmailTooltip = document.querySelector('#gmail-tooltip');
const discordTooltip = document.querySelector('#discord-tooltip');

if (navigator.clipboard) {
  console.log("I have access to your clipboard. Yeehaw.");
} else {
  console.log("I do not have access to your clipboard. Boo.");
}

// function unhideAlert(){
//   successAlert.style.display = "initial"
// }
// unhideAlert()

// focusMethod = function getFocus() {
//   document.getElementById("alert-success").focus();
// }

function copyGmail() {
  navigator.permissions.query({ name: 'clipboard-read' }).then(result => {
    if (result.state === 'granted' || result.state === 'prompt') {
      navigator.clipboard.readText()
        .then(() => {
          // document.getElementById("gmailButton").focus();
          navigator.clipboard.writeText("flower.webster@gmail.com")
          // throw alert("sucess copy")
        })
        .catch(err => {
          // alert("fail copy", err)
        });
    }
  })
}

// Pass the button, the tooltip, and some options, and Popper will do the
  // magic positioning for you:
  Popper.createPopper(button, gmailTooltip, {
    placement: 'top',
  });

// user uses gmail button, copies textA
// user uses discord button, copies textb