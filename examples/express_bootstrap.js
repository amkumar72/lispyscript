// Generated by LispyScript v0.3.6
var express = require("express");
var app = express();
app.listen(3000);
app.use(express.static((__dirname + "/public")));
var _LS = (_LS || {});
_LS.expandTag = function(name,attr) {
    var args = Array.prototype.slice.call(arguments);
    var ret = "";
    return ((Object.prototype.toString.call(name) === "[object String]") ?
        (function() {
            ret = ("<" + name);
            args.shift();
            ((Object.prototype.toString.call(attr) === "[object Object]") ?
                (function() {
                    ret = (ret + (function() {
                        var ___ret = "";
                        (function(o,f,s) {
                            var _k = Object.keys(o);
                            return (_k).forEach(function(elem) {
                                return f.call(s,o[elem],elem,o);
                            });
                        })(attr,function(value,key) {
                            ___ret = (___ret + [" ",key,"=","\"",value,"\""].join(''));
                        });
                        return ___ret;
                    })());
                    return args.shift();
                })() :
                undefined);
            (((args.length > 0) || (name === "script")) ?
                ret = [ret,">",args.join(""),"</",name,">"].join('') :
                ret = (ret + "/>"));
            return ret;
        })() :
        "");
};
var basePage = function(pageTitle,navBarLinks,bodyContent) {
    return [("<!DOCTYPE html>\n" + _LS.expandTag("html",{lang:"en"},_LS.expandTag("head",_LS.expandTag("title",pageTitle),_LS.expandTag("link",{href:'bootstrap/css/bootstrap.css', rel:'stylesheet'}),_LS.expandTag("style",{type:'text/css'},"body {\n           padding-top: 60px;\n        }"),_LS.expandTag("link",{href:'bootstrap/css/bootstrap-responsive.css', rel:'stylesheet'}),["<!-- ",'Le HTML5 shim, for IE6-8 support of HTML5 elements'," -->"].join(''),"<!--[if lt IE 9]>\n         <script src='http://html5shim.googlecode.com/svn/trunk/html5.js'></script>\n       <![endif]-->"),_LS.expandTag("body",_LS.expandTag("div",{class:"navbar navbar-fixed-top"},_LS.expandTag("div",{class:"navbar-inner"},_LS.expandTag("div",{class:"container"},_LS.expandTag("a",{class:"btn btn-navbar",
                "data-toggle":"collapse",
                "data-target":".nav-collapse"},"<span class='icon-bar'></span>","<span class='icon-bar'></span>","<span class='icon-bar'></span>"),_LS.expandTag("a",{class:"brand", href:"#"},"LispyScript!"),_LS.expandTag("div",{class:"nav-collapse"},navBarLinks)))),bodyContent,_LS.expandTag("script",{src:"//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",type:"text/javascript"}),_LS.expandTag("script",{type:"text/javascript",src:"bootstrap/js/bootstrap.js"}))))].join('');
};
var navBarLinks = function() {
    return [_LS.expandTag("ul",{class:'nav'},_LS.expandTag("li",{class:'active'},_LS.expandTag("a",{href:'#'},"Home")),_LS.expandTag("li",_LS.expandTag("a",{href:'/tryit'},"Try It")),_LS.expandTag("li",_LS.expandTag("a",{href:'/docs'},"Docs")))].join('');
};
var bodyContent = function() {
    return [_LS.expandTag("div",{class:'container'},_LS.expandTag("div",{class:'page-header'},_LS.expandTag("h1","LispyScript"),_LS.expandTag("p","A javascript With Lispy Syntax And Macros!")),_LS.expandTag("div",{class:'row'},_LS.expandTag("div",{class:'span6'},_LS.expandTag("h2","Overview"),_LS.expandTag("p","An inherent problem with Javascript is that it has no macro support, like other Lisp like languages. That's because macros manipulate the syntax tree while compiling. And this is next to impossible in a language like Javascript.")),_LS.expandTag("div",{class:'span6'},_LS.expandTag("h2","Installing"),_LS.expandTag("h4","Install Using npm"),_LS.expandTag("pre","$ npm install -g lispyscript"))))].join('');
};
app.get("/",function(req,res) {
    return res.send(basePage("LispyScript",navBarLinks(),bodyContent()));
});
