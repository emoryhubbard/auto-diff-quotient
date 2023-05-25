# Auto Diff Quotient Utility

Designed to help with numerically checking your derivates when doing calculus work, to see if you got the right answer. Typing out a difference quotient into a graphing website is laborious.

Instead, copy and paste your function into the message box that pops up.

To get the message box, you simply make a bookmark:

Edit a bookmark's url, replacing it with this code:
    javascript:function autoDiffQuotient(){let t=prompt("Enter your function: ","");null!=t&&""!=t&&alert(getDiffQuotient(t))}function getDiffQuotient(t){return initialDQ="((f2) - (f1))/.001",f1=t,f2=t.replaceAll("x","(x+.001)"),f2DQ=(f1DQ=initialDQ.replace("f1",f1)).replace("f2",f2)}autoDiffQuotient();

The code in the repo just shows how this line of code works and was developed.

