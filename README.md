# Auto Diff Quotient Utility

Designed to help with numerically checking your derivates when doing calculus work, to see if you got the right answer. Typing out a difference quotient into a graphing website is laborious.

Instead, copy and paste your function into the message box that pops up.

To get the message box, you simply make a bookmark:

Edit a bookmark's url, replacing it with this code:

    javascript:function autoDiffQuotient(){let t=prompt("Enter your function: ","");null!=t&&""!=t&&alert(getDiffQuotient(t))}function getDiffQuotient(t){return initialDQ="((f2) - (f1))/.001",f1=t,f2=t.replaceAll("x","(x+.001)"),f2DQ=(f1DQ=initialDQ.replace("f1",f1)).replace("f2",f2)}autoDiffQuotient();

The code in the repo just shows how this line of code works and was developed.

My opinion is that is better to use a numerical tool to check answers when studying mathematics, because you will be unable to find your mistakes and check your answers on your own, both on exams and personally, if you rely on CAS. You have to do your own "debugging" if you want to develp the ability to solve problems on your own.

This method can be done manually, it is just tedious, unlike CAS applications like Wolfram Alpha. Automated graphing and arithmetic likewise aren't anything you can't do on your own with time and effort. My recommendation is to avoid any system stunts your ability to do algebra and higher mathematics during your studies, but embrace them for higher research.

