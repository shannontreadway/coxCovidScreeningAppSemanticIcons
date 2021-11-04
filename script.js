window.addEventListener("load", function(){
    let covidPositiveElem = document.querySelector('#covidPositive');
    let symptomCheckElem = document.querySelector('#symptomCheck');
    let continueElem = document.querySelector('#continue');

    continueElem.addEventListener("click", function() {
        function submitAssessment(covidPositiveElem, symptomCheckElem) { 
            //Ensure answers to both questions are either yes or no
            if (covidPositiveElem.value === "choose" || symptomCheckElem.value === "choose"){
                alert("All fields are required.");
                return "index.html";
            };
            
            //Check to see if answer to either question is yes; if so, they fail.
            if (covidPositiveElem.value === "yes" || symptomCheckElem.value === "yes"){
                return "fail.html";
            };
        
            //Check to see if answers to both questions are no; if so, they pass.
            if (covidPositiveElem.value === "no" && symptomCheckElem.value === "no"){
                return "pass.html";
            };
        };
        let myLink = (submitAssessment(covidPositiveElem, symptomCheckElem));
        window.location.href = myLink;
    });
});
