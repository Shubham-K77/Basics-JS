// Task 2) Texts Into Proper Case Convert
const properTextConvert = (word) => {
    //Converts The Word Into Strings In Lower Case =>
    const texts = word.toLowerCase().split(" ");
    //Now Loop For To Change The First Letter To Upper Case =>
    for(let i = 0; i < texts.length; i++){
        texts[i] = texts[i].charAt(0).toUpperCase() + texts[i].substring(1);
    }
    return texts.join(" "); 
}

alert(properTextConvert('raktim shrestha'));