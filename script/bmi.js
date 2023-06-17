
// bmi function

const bmi = (weight, height) => {
    let bmindex =  +((weight/(height**2)).toFixed(1));
    
    if (bmindex<=18.4){
            return `Your body mass index is ${bmindex}\n Status: underweight`}

    else if (bmindex< 25){
            return `Your body mass index is ${bmindex}\n Status: normal`}

    else if (bmindex < 40){
            return `Your body mass index is ${bmindex}\n Status: overweight`}

    else {
            return `Your body mass index is ${bmindex}\n Status: obese`

    }
    }

console.log(bmi(58, 1.65))
