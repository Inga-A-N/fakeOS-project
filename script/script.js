// BMI function - calculates BMI
// Call it when the user clicks the button in the form
const bmi = (weight, height) => {
    let bmindex =  +((weight/((height/100)**2)).toFixed(1));
    if (weight <=0 || height <= 0){
        return `Please enter valid numbers`
    }
    if (bmindex >= 40) {
        return `Your body mass index is ${bmindex}\n Status: obese`}

    else if (bmindex > 25){
            return `Your body mass index is ${bmindex}\n Status: overweigt`}

    else if (bmindex > 18.4){
            return `Your body mass index is ${bmindex}\n Status: normal`}

    else if (bmindex > 0 && bmindex<=18.4){
        return `Your body mass index is ${bmindex}\n Status: underweight`}
    }

//DOM

//Making top secret folder button display bmi calculator

const topSecret = document.querySelector("#topSecret");

console.log(topSecret)

const form = document.querySelector(".form");

const messageDiv = document.querySelector("#message");
console.log(messageDiv.children);


console.log(form)

topSecret.addEventListener("click", () => {

    if (messageDiv.children.length > 0) {
        messageDiv.removeChild(document.querySelector("#msg"));
    }
    
    form.classList.toggle("form--clicked")
    console.log(form)
})





form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    console.log(formData);
    const weight = formData.get("weight");
    const height = formData.get("height");
    
    let messageStr = bmi(weight, height);

    
    // const bmiCalc = bmi(weight, height);

    // bmiCalc();

    if (messageDiv.children.length > 0) {
        messageDiv.removeChild(document.querySelector("#msg"));
    }

    // create a p tag to add to the page
    const newPara = document.createElement("p");
    newPara.id = "msg";

    // create a text node from messageSTr for the p tag
    const text = document.createTextNode(messageStr);

    // tell the text to go inside my paragraph
    newPara.appendChild(text);

    // tell teh p tag where to go on the page
    messageDiv.appendChild(newPara);

    // clear the from
    form.reset();

})


    



