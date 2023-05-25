autoDiffQuotient();

function autoDiffQuotient() {
    let fn = prompt("Enter your function: ", "");
    if (fn == null || fn == "")
        return;
    
    DQ = getDiffQuotient(fn);
    alert(getDiffQuotient(fn));
}
function getDiffQuotient(fn) {
    initialDQ = "((f2) - (f1))/.001";
    f1 = fn;
    f2 = fn.replaceAll("x", "(x+.001)");

    f1DQ = initialDQ.replace("f1", f1);
    f2DQ = f1DQ.replace("f2", f2);
    return f2DQ;
}

// Bookmark Test
/*
javascript:alert("Testing 1, 2, 3");
*/

// Function Test
// I just googled "javascript minifier online"
// to get this quick utility:
// https://www.toptal.com/developers/javascript-minifier
/*
javascript:autoDiffQuotient();function autoDiffQuotient(){let t=prompt("Enter your name: ","Default Name");console.log("Auto diff quotient running"),null!=t&&""!=t&&alert(`Hello, ${t}.`)}
*/

/* Function Test
function autoDiffQuotientTest() {
    let userName = prompt("Enter your name: ", "Default Name");
    if (userName == null || userName == "")
        return;
    alert(`Hello, ${userName}.`);
}
*/

/* Auto Diff Quotient Test
javascript:function autoDiffQuotient(){let t=prompt("Enter your function: ","");null!=t&&""!=t&&alert(getDiffQuotient(t))}function getDiffQuotient(t){return initialDQ="((f2) - (f1))/.001",f1=t,f2=t.replaceAll("x","(x+.001)"),f2DQ=(f1DQ=initialDQ.replace("f1",f1)).replace("f2",f2)}autoDiffQuotient();
*/
