let firstName = document.getElementById("first_name");

function validate(){
    // let regexp = /^([A-Za-z]+)$/;
    let regexp = /^([/w/]+)/;

    if (regexp.test(firstName)) {
        return true;
    }
}

