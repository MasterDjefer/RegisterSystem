// var logInRequest = new XMLHttpRequest();

// logInRequest.onreadystatechange = function()
// {
//     if (logInRequest.readyState == XMLHttpRequest.DONE)
//     {
//         console.log("logIn");
//         // document.getElementById("inputField").value = request.responseText;
//     }
// }
// document.getElementById("logIn").addEventListener("click", function()
// {    
//     var num = document.getElementById("inputField").value;
//     request.open("GET", "/logIn", true);
//     request.send();
// });

//////////////////////////////////////////////////////////////

// var postRequest = new XMLHttpRequest();

// postRequest.onreadystatechange = function()
// {
//     if (postRequest.readyState == XMLHttpRequest.DONE)
//     {
//         document.getElementById("inputField").value = postRequest.responseText;
//     }
// }
// document.getElementById("postButton").addEventListener("click", function()
// {        
//     var obj = 
//     {
//         rec: "nooo",
//         and: 70
//     };
//     postRequest.open("POST", "/request", true);
//     postRequest.setRequestHeader("Content-Type", "application/json");
//     postRequest.send(JSON.stringify(obj));
// });

// ///////////////////////////////////////////////////////////////

// var pageRequest = new XMLHttpRequest();

// pageRequest.onreadystatechange = function()
// {
//     if (pageRequest.readyState == XMLHttpRequest.DONE)
//     {
//         console.log(pageRequest.responseText);
//         window.location.href("/newPage");
//     }
// }
// document.getElementById("pageButton").addEventListener("click", function()
// {      
//     pageRequest.open("GET", "/newPage", true);
//     pageRequest.send();            
// });
