
// bmi function

export const bmi = (weight, height) => {
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

    export const puzzleAnswer = (answer) => {
        const x = "queue";
        console.log(answer.trim().toLowerCase());
        // return answer.trim().toLowerCase()===x? "Correct!":"Nope"
        return answer.trim().toLowerCase()===x
}

console.log(puzzleAnswer("queue"))


    