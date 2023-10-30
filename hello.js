console.log("-------EXTERNAL SCRIPT--------------------");
console.log("Hello, World");

console.log("----------VARIABLES------------------");
let letKeyword = "let keyword";
console.log(letKeyword);

const constKeyword = "This cannot not reassign";
console.log(constKeyword);

console.log("--------------ARRAYS-------------------------");
const constructorArray = Array();
console.log(constructorArray);

const newArray = new Array();
console.log(newArray);

const emptyArray = [];
console.log(emptyArray);

const vechiclesArray = ["car", "bike", "cycle", "truck", "bus", "plane", "boat", "train"];
console.log("Vechicles: ", vechiclesArray);
console.log("Number of Vechicles: ", vechiclesArray.length);

const arrayContainingDifferentDataTypes = [
    "string", 3, 6.9, true, null, {vechicle: "bus"}, {vechicles: ["car", "bus", "cycle"]}
];
console.log(arrayContainingDifferentDataTypes);

console.log("split method");
const string = "string";
const stringArray = string.split("");
console.log(stringArray);

const companies = "Jio, Airtel, Idea, BSNL";
const companiesArray = companies.split(", ");
console.log(companiesArray);

console.log("-------------ARRAY EXERCISES---------------------");
console.log("Declare an Array:");
const declareAnArray = new Array();
console.log(`declareAnArray: ${declareAnArray}`);
console.log("declareAnArray:", declareAnArray);

console.log("Declare an Array with 5 elements");
const fiveEleArray = new Array(5).fill(5);
console.log(fiveEleArray);
console.log("length of an array: ", fiveEleArray.length);

console.log("First item of an array: ", fiveEleArray[0]);
const middleItem = ((fiveEleArray.length) -1) / 2;
console.log(middleItem);
console.log("middle item of an array: ", fiveEleArray[middleItem]);
console.log("last item of an array: ", fiveEleArray[fiveEleArray.length - 1]);

console.log("Declare an array with different datatypes:");
const differentDataTypesArray = [
    "string",
    3,
    true,
    null,
    undefined,
    {object: "object"},
    ["array", "insideAnArray"],
    6.9,
];

console.log(differentDataTypesArray);
console.log("length of the differentDataTypesArray: ", differentDataTypesArray.length);

const itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
];
console.log("itCompanies: ", itCompanies);

console.log("Number of Companies: ", itCompanies.length);

console.log(itCompanies[0]);
console.log(itCompanies[middleItem]);
console.log(itCompanies[itCompanies.length - 1]);
for (let company of itCompanies) {
    console.log(company);
}

console.log("UpperCase Companies: ");
for (let x = 0; x < itCompanies.length; x += 1) {
    console.log(itCompanies[x].toUpperCase());
}

const lastItem = itCompanies.pop();
const arrayLikeSentence = itCompanies.join(", ");
console.log(arrayLikeSentence, "and", lastItem, "are big IT companies");

const companyExists = itCompanies.indexOf("Apple");
console.log(companyExists);
companyExists != -1 ? 
console.log("Company Exists") : console.log("Company is not found");

console.log("---------------CONDITIONALS-----------------------");
let weather = "sunny";
if (weather === "rainy") {
    console.log("You need a rain coat");
} else if (weather === "cloudy") {
    console.log("You need a jacket");
} else if (weather === "sunny") {
    console.log("Go out freely");
} else {
    console.log("No need for rain coat");
}

console.log("----------------SWITCH BLOCK-------------------");
// let weather2 = window.prompt("Enter today's weather:");
// weather2 = weather2.toLocaleLowerCase();
let weather2 = "rainy";
switch (weather2) {
    case "sunny":
        console.log("Go out freely");
        break;
    case "rainy":
        console.log("You need a rain coat");
        break;
    case "spring":
        console.log("Go Enjoy yourself");
        break;
    case "cloudy":
        console.log("You need a jacket");
        break;
    case "winter":
        console.log("You need a padding jacket");
        break;
    default:
        console.log("cannot predict the weather");
}

console.log("----------------TERNARY OPERATOR-------------------");
// let isRaining = window.prompt("Is Raining Today?");
// isRaining = isRaining.toLocaleLowerCase();
// console.log(isRaining);
let isRaining = false;
isRaining ? console.log("you need a rain coat") : console.log("you do not need a rain coat")

console.log("-------------------FOREACH METHOD----------------------");
const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((num, i) => {
    console.log(num, i);
})

const countries = ["india", "australia", "new zealand", "england", "pakistan", "bangladesh", "sri lanka", "south africa"];
countries.forEach((country, index, array) => {
    console.log(index, "-->", country);
    console.log(country);
    console.log(array);
})

console.log("---------------------FOR IN LOOP------------------------");
const objectInfo = {
    name: "luffy",
    series: "one piece",
    country: "japan",
    revials: ["naruto", "demon slayer", "jjk", "dragon ball"],
};

for (const objKey in objectInfo) {
    console.log(objKey, objectInfo[objKey]);
}

console.log("-------------------OBJECTS-----------------------");
const emptyObject = {};
console.log(emptyObject);

const rectangleObj = {
    length: 36,
    width: 69,
};

console.log(rectangleObj);

const personInfoObj = {
    firstName: "Naruto",
    lastName: "Uzamaki",
    city: "konoha",
    country: "Land of fire",
    skills: ["genjustu", "taijustu", "ninjustu"],
    isMarried: true,
    getFullName: function() {
        return `${this.firstName} ${personInfoObj.lastName}`
    },
    "phone number": 123456,
};

console.log(personInfoObj);
console.log("Accessing values using . notation");
console.log(personInfoObj.city);
console.log(personInfoObj.isMarried);
console.log(personInfoObj.getFullName());

console.log("Accessing values using [] notation");
console.log(personInfoObj["country"]);
console.log(personInfoObj["skills"]);
console.log(personInfoObj["phone number"]);

console.log("Setting new keys for object");
personInfoObj.clan = "Uzamaki Clan";
personInfoObj.skills.push("Nine tails control");
personInfoObj.getPersonInfo = function() {
    let listWithLastItem = this.skills.slice(0, this.skills.length - 1).join(", ");
    console.log(listWithLastItem);
    let lastSkill = this.skills.slice(this.skills.length - 1)[0];
    console.log(lastSkill);

    let skills = `${listWithLastItem} and ${lastSkill}`;
    let fullName = this.getFullName();
    let statement = `His name is ${fullName}, he lives in ${this.country}, he has particular skills ${skills}`;
    return statement;
}

console.log(personInfoObj);
console.log(personInfoObj.getPersonInfo());

console.log("---------------------OBJECTS METHODS-------------------");
const copyPersonObjInfo = Object.assign({}, personInfoObj);
console.log(copyPersonObjInfo);

let objKeys = Object.keys(copyPersonObjInfo);
console.log(objKeys);

let objValues = Object.values(copyPersonObjInfo);
console.log(objValues);

let objKeysAndValues = Object.entries(copyPersonObjInfo);
console.log(objKeysAndValues);

console.log(copyPersonObjInfo.hasOwnProperty("firstName"));
console.log(copyPersonObjInfo.hasOwnProperty("title"));

console.log("--------------------FUNCTIONS---------------------");
function functionWithUnlimitedParams() {
    console.log(arguments);
}

functionWithUnlimitedParams(3);
functionWithUnlimitedParams(3, 6);

function sumOfGivenArguments() {
    let sum = 0;
    for (let num of arguments) {
        sum += num;
    }

    return sum;
}

console.log(sumOfGivenArguments(3, 6, 9, 12));

console.log("----------------------ARROW FUNCTIONS-----------------------");
const arrowFunctionWithUnlimitedParams = (...unlimitedParams) => {
    console.log(unlimitedParams);
}

arrowFunctionWithUnlimitedParams(3);

const sumOfGivenArgumentsArrowFunc = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i += 1) {
        sum += args[i];
    }
    return sum;
}

const arrayChange = (arr) => {
    let newArray = [];
    for (let ele of arr) {
        newArray.push(ele.toUpperCase());
    }
    return newArray;
}

const countriesArray = ["india", "bharat", "chola", "pandya", "cheera", "vijayanagara", "maratha", "gupta", "mourya", "mughal", "kakatiya"];
console.log(countriesArray);
console.log(arrayChange(countriesArray));


console.log(sumOfGivenArgumentsArrowFunc(3, 6, 9, 12));

console.log("-------------------ANONYMOUS FUNCTIONS-----------------------");
const anonymousFunc = function() {
    console.log("I am an anonymous function.");
}

anonymousFunc();

const selfInvokingFunc = function(radius) {
    return radius * radius;
} (3);

console.log(selfInvokingFunc);



console.log("-------------------CALLBACK FUNCTIONS-----------------------");
const callbackFunc = (num) => {
    return num + num;
}

const mainFunc = (callbackFuncAsParam, num) => {
    return callbackFuncAsParam(num) + num;
}

console.log(mainFunc(callbackFunc, 3));

console.log("--------------------SETINTERVAL FUNCTION-------------------");
const callbackFuncSetInterval = (name) => {
    let message = window.alert(`Hello, ${name}`);
    return message;
}

// setInterval(() => {callbackFuncSetInterval("vignesh")}, 2000);

console.log("----------------------SETTIMEOUT FUNCTION--------------------");





