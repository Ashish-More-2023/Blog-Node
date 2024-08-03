
import express from "express";
import bodyParser from "body-parser";
const port = 3000;
const app = express();
const blogtitle = [];
const blogcontent = [];
const blogdate = [];
const blogid = [];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.post("/submit" , (req,res)=>{
    blogtitle.push(req.body.btitle);
    blogcontent.push(req.body.bcontent);
    blogdate.push(new Date());
    blogid.push(req.body.bemail);
    res.render("index.ejs",{
        blogTitle : blogtitle,
        blogContent : blogcontent,
        blogDate : blogdate,
        blogId:blogid,
    }
    
);
// console.log(req.body);
// console.log(blogcontent);
// console.log(blogdate);
// console.log(blogid);
// console.log(blogtitle);

});
if(blogid == []){
    app.get("/", (req,res)=>{
        res.render("index.ejs");
    });
} else {
    app.get("/home", (req,res)=>{
        res.render("home.ejs",{
            blogTitle : blogtitle,
            blogContent : blogcontent,
            blogDate : blogdate,
            blogId:blogid,
        });
    });
}



app.get("/about",(req,res)=>{
    res.render("about.ejs");
});

app.get("/add",(req,res)=>{
    res.render("add.ejs");
});
app.get("/blog",(req,res)=>{
    res.render("blog.ejs",{
        blogTitle : blogtitle,
        blogContent : blogcontent,
        blogDate : blogdate,
        blogId:blogid,
    });
});


app.get("/contact",(req,res)=>{
    res.render("about.ejs");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

