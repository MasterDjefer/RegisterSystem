let express = require("express");
let bodyParser = require("body-parser");
let app = express();

let users = 
[
    {
        userName: "admin",
        password: "admin"
    }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "\\public"));
app.use(express.static(__dirname + "\\client"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '\\views');

app.get("/", function(req, res)
{
    console.log("/");
    res.render("index");
});
app.get("/openLogIn", function(req, res) 
{
    console.log("/openLogIn");
    res.render("login");
});
app.post("/profile", function(req, res) 
{
    console.log("/profile");

    let findUser = users.find(function(element)
    {
        if (element.userName == req.body.userName && element.userName == req.body.password)
        {
            return true;
        }
        return false;
    });

    if (findUser)
    {
        res.render("profile");
    }
    else
    {
        res.redirect("openLogIN");
    }
});

// app.get("/request", function(req, res)
// {
//     console.log(req.body);
//     console.log("/request(get)");
//     let array = 
//     [
//         {
//             rob: "small",
//             talk: 12
//         },
//         {
//             rob: "BIG",
//             talk: 45
//         },
//         {
//             rob: "middle",
//             talk: 132
//         }
//     ];
//     res.send(array);
// });
// app.get("/newPage", function(req, res)
// {
//     console.log("/newPage");
//     res.render("page");
// });
// app.get("/request/:num", function(req, res)
// {
//     console.log(req.params);
//     console.log("/:num");
//     res.send(req.params.num * 2 + "");
// });

// app.post("/request", function(req, res)
// {
//     console.log(req.body);
//     console.log("/request(post)");
//     res.send(req.body.rec + " - " + req.body.and);
// });


app.listen(12345, function()
{
    console.log("server startting...");
});