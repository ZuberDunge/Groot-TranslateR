
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var errorOuput = document.querySelector(".error-output");
var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}


function clickEventHandler() {
    // txtOutput.innerText ="groot translatin :" + txtInput.value;
    var inputTxt = txtInput.value;


    fetch(getTranslationURL(inputTxt))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            txtOutput.innerText = translatedTxt;
        })
        .catch(() => errorOuput.innerText="sorry, some error occured")
    

};

btnTranslate.addEventListener("click", clickEventHandler);