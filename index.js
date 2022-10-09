var c=0;
let pw1=document.forms["myform"]["password2"];
let em=document.getElementById("suggestion");
let w3=document.getElementById("warn4");
pw1.style.display="none";
em.style.display="none";
function show() {
    em.style.display="flex";
}
function hide() {
    em.style.display="none";
    let pw=document.getElementById("passwd").value;
    let pw1=document.forms["myform"]["password2"];
    if((pw.length)<6){
    w3.style.display="flex";
    w3.innerHTML="<h3>Password length must be at least 6 Characters</h3>";
    }
   else
   {w3.style.display="none";
   pw1.style.display="flex";
   return 1;
    }   
}
function passwdchecker() {
    let pw=document.forms["myform"]["password"].value;
    let pw1=document.forms["myform"]["password2"].value;
    document.getElementById("warn5").style.display="flex";
    if(pw!=pw1)
    {document.getElementById("warn5").innerHTML="<h3>Password is not matching.</h3>";
    return 0;
}
else
{document.getElementById("warn5").style.display="none";
return 1;
}
    
}
function validateform() {
    let w1=document.getElementById("warn1");
    let w2=document.getElementById("warn2");
    let w6=document.getElementById("warn6");
    let w7=document.getElementById("warn7");
    let f=document.getElementById("formdata");
    let f1=document.getElementById("end");
    let x=document.forms["myform"]["name"].value;
    let ph=document.forms["myform"]["phone"].value;
    if( x===""||x.length>60)
   {document.getElementById('warn1').innerHTML='<h3>Fill name Field correctly!!</h3>';
    }
   else
   {w1.style.display="none";
    c++;}
   if(((ph.length)!=10)||(ph[0]==0))
   {document.getElementById('warn2').innerHTML='<h3>Fill phone number correctly!!</h3>';}
   else
   {w2.style.display="none";
   c++;
    }
    if((/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(myform.email.value)))
    {
        c++;
        document.getElementById("warn3").style.display="none";
        
    }
    else
    {   document.getElementById("warn3").style.display="block";
        document.getElementById("warn3").innerHTML="<h3>Fill email correctly!!</h3>";
    }
    let gen=document.getElementsByName("gender");
    let ch=0;
    for(i=0;i<gen.length;i++){
    if(gen[i].checked) {
        w7.style.display="none";
        ch=1;
        c++;
         }}
     if(ch!=1){
        w7.style.display="block";
        w7.innerHTML="<h3>Select Gender</h3>";
    }
    let d=document.getElementById("dob").value;
    console.log(d);
     if(d==="") {
         w6.style.display="block";
         w6.innerHTML="<h3>Select DOB</h3>"}
     else{
        w6.style.display="none";
        c++;
     }
   c=c+hide()+passwdchecker();
    if(c==7)
    {f.style.display="none";
    f1.style.display="flex";
    document.getElementById("submit").style.display="none";
    document.getElementById("first").style.display="none";
    document.getElementById("container").style.height="100vh";
    f1.innerHTML="<h1>Your Form is Submitted</h1>";
   let name=document.forms["myform"]["name"].value;
   let phone=document.forms["myform"]["phone"].value;
   let email=document.forms["myform"]["email"].value;
   let gender=document.forms["myform"]["gender"].value;
   let dob=document.forms["myform"]["dob"].value;
   let add=document.forms["myform"]["address"].value;
    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(gender);
    console.log(dob);
    console.log(add);
    document.getElementById("detailhead").innerHTML="<h3>Details</h3>";
    document.getElementById("detail1").innerHTML="<span>Name:"+name+"</span>";
    document.getElementById("detail2").innerHTML="<span>Phone:"+phone+"</span>";
    document.getElementById("detail3").innerHTML="<span>Email:"+email+"</span>";
    document.getElementById("detail4").innerHTML="<span>Gender:"+gender+"</span>";
    document.getElementById("detail5").innerHTML="<span>DOB:"+dob+"</span>";
    document.getElementById("detail6").innerHTML="<span>Address"+add+"</span>";
}


c=0;
}









