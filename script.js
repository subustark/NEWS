//functions: it helps to remove the repeatative code
var label=createlabels("label","for","name","First Name");
var br1=createlinebreak("br");
var input=createinput("input","type","text","id","name");
var br2=createlinebreak("br");

var label1=createlabels("label","for","name","Middle Name");
var br3=createlinebreak("br");
var input1=createinput("input","type","text","id","name");
var br4=createlinebreak("br");

var label2=createlabels("label","for","name","Last Name");
var br5=createlinebreak("br");
var input2=createinput("input","type","text","id","name");
var br6=createlinebreak("br");

var phonenumber=createlabels("label","for","number","Phone Number");
var br7=createlinebreak("br");
var phonenumber1=createinput("input","type","number","id","phonenumber");
var br8=createlinebreak("br");


document.body.append(label,br1,input,br2,label1,br3,input1,br4,label2,br5,input2,br6,phonenumber,br7,phonenumber1,br8);


function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
//it is returning an HTML element
//<label for="email">Mail</label>

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}