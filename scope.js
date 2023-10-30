a = "javascript";
b = 36;

function learnScope() {
    console.log(a, b);
    if (true) {
        console.log(a, b);
    }
}

console.log(a, b);

console.log("--------------GLOBAL SCOPE-----------------------");
let globalScopeVariable1 = "javascript";
let globalScopeVariable2 = 69;

function globalScope() {
    console.log(globalScopeVariable1, globalScopeVariable2);
    if (true) {
        let globalScopeVariable1 = "python";
        let globalScopeVariable2 = 36;
        console.log(globalScopeVariable1, globalScopeVariable2);
    }

    console.log(globalScopeVariable1, globalScopeVariable2);
}

globalScope();
console.log(globalScopeVariable1, globalScopeVariable2);

console.log("-----------------LOCAL SCOPE----------------");
let localScopeVar1 = "HTML";
let localScopeVar2 = "CSS";

function localScope() {
    console.log(localScopeVar1, localScopeVar2);
    let localScopeVar3 = "java";
    if (true) {
        let localScopeVar1 = "python";
        let localScopeVar2 = "C++";
        let localScopeVar4 = "PHP";
        console.log(localScopeVar1, localScopeVar2, localScopeVar3, localScopeVar4);
    }

    console.log(localScopeVar3);
}

localScope();
console.log(localScopeVar1, localScopeVar2);