let email = "codecamp@gmail.com";
email.includes("@");
email.split("@");

let userMail = email.split("@")[0];
let company = email.split("@")[1];

let maskingMail = [];
maskingMail.push(userMail[0]);
maskingMail.push(userMail[1]);
maskingMail.push(userMail[2]);
maskingMail.push(userMail[3]);
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");

let emailMasking = maskingMail.join("") + "@" + company;
