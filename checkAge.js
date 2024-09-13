function ageChecker(age){
    if(age >= 18 && age < 120) return "Adult";
    else if(age < 18 && age >= 13) return "Teenager";
    else return "Child";
}

console.log(ageChecker(40));