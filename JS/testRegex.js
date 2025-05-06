let regexPsd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

if (regexPsd.test("test")) console.log("test");

if (regexPsd.test("teste-1Z")) console.log("teste-1Z");
if (regexPsd.test("teste-1r")) console.log("teste-1r");
