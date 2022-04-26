
const successAlert = document.querySelector("alert-success")
const failAlert = document.querySelector("danger-success")

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
          document.getElementById("gmailButton").focus();
          navigator.clipboard.writeText("tye.shay.web@gmail.com")
          throw alert("sucess copy")
        })
        .catch(err => {
          alert("fail copy", err)
        });
    }
  })
}

