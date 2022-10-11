var c=0,u=0,p=0,e=0,n=0;
let w1=document.getElementById("warn1");
let w2=document.getElementById("warn2");
let w6=document.getElementById("warn6");
let w7=document.getElementById("warn7");
let wemail=document.getElementById("warn3");
let wuser=document.getElementById("warnuser");
let pw1=document.forms["myform"]["password2"];
let em=document.getElementById("suggestion");
let w3=document.getElementById("warn4");
let w8=document.getElementById("warn8");
let re=document.getElementById("refresh");
re.style.display="none";
pw1.style.display="none";
em.style.display="none";


 function show() {
     em.style.display="flex";
}

 function hide() {
    em.style.display="none";
   let pw=document.getElementById("passwd").value;
   let pw1=document.forms["myform"]["password2"];
    if((pw.length)<=8){
         w8.style.display="flex";
    w8.innerHTML="<h3>Password length must be at least 8 Characters</h3>";
    }
   else
   {w8.style.display="none";
  pw1.style.display="flex";

    }   
 }

const name_=document.getElementById("name");
name_.addEventListener('blur',()=>{
    let regex1=/^([A-Za-z ]){3,30}$/;
    let val=name_.value;
    if (regex1.test(val)) {
        w1.style.display="none";
        n=1;   
    }
    else
    {   w1.style.display="block";
        document.getElementById('warn2').innerHTML='<h3>Fill Name correctly!!</h3>';
        n=0;
    }
})
const phone=document.getElementById("phone");
phone.addEventListener('blur',()=>{
    let regex1=/^[6 7 8 9]([0-9]){9}$/;
    let val=phone.value;
    if (regex1.test(val)) {
        w2.style.display="none";
        p=1;   
    }
    else
    {   w2.style.display="block";
        document.getElementById('warn2').innerHTML='<h3>Fill phone number correctly!!</h3>';
        p=0;
    }
})
const email=document.getElementById("email");
email.addEventListener('blur',()=>{
    let regex2=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let val1=email.value;
    if (regex2.test(val1)) {
        wemail.style.display="none";
        e=1;   
    }
    else
    {   wemail.style.display="block";
        wemail.innerHTML='<h3>Fill email correctly!!</h3>';
        e=1;
    }
})
const username=document.getElementById("username");
username.addEventListener('blur',()=>{
    let regex3=/^[a-zA-z_]([0-9a-zA-Z_]){2,20}$/;
    let val2=username.value;
    if (regex3.test(val2)) {
        wuser.style.display="none";
        u=1;   
    }
    else
    {   wuser.style.display="block";
        document.getElementById('warnuser').innerHTML='<h3>Username is Invalid!!</h3>';
        u=0;
    }
})
const passwd=document.getElementById("passwd");
passwd.addEventListener('blur',()=>{
    let regex4=/^.*(?=.{8,15})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
    let val3=passwd.value;
    if (regex4.test(val3)) {
        w3.style.display="none"; 
    }
    else
    {   w3.style.display="block";
    w3.innerHTML='<h3>Weak Password!!</h3>';
}
})
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
     }}
function validateform() {
   
        let f=document.getElementById("formdata");
        let f1=document.getElementById("end");
        let x=document.forms["myform"]["name"].value;
        let y=document.forms["myform"]["username"].value;
        let z=document.forms["myform"]["email"].value;
        let ph=document.forms["myform"]["phone"].value;
        if( x===""||x.length>60)
       {w1.innerHTML='<h3>Fill name Field correctly!!</h3>';
        }
       else
       {w1.style.display="none";}
        if( y==="")
       {document.getElementById('warnuser').innerHTML='<h3>Fill Username!!</h3>';
        }
       else
       {document.getElementById("warnuser").style.display="none";
        }
        if( z==="")
       {wemail.innerHTML='<h3>Fill Email!!</h3>';
        }
       else
       {wemail.style.display="none";
        }
        if( ph==="")
       {w2.innerHTML='<h3>Fill Phone Number!!</h3>';
        }
       else
       {w2.style.display="none";
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
         if(d==="") {
             w6.style.display="block";
             w6.innerHTML="<h3>Select DOB</h3>"}
         else{
            w6.style.display="none";
            c++;
         }
       c=c+n+p+e+u+passwdchecker();
        if(c==7)
        {f.style.display="none";
        f1.style.display="flex";
        document.getElementById("submit").style.display="none";
        document.getElementById("first").style.display="none";
        document.getElementById("container").style.height="100vh";
        re.style.display="block";
        document.getElementById("reset").style.display="none";
        f1.innerHTML="<h1>Your Form is Submitted</h1>";
       let name=document.forms["myform"]["name"].value;
       let phone=document.forms["myform"]["phone"].value;
       let email=document.forms["myform"]["email"].value;
       let gender=document.forms["myform"]["gender"].value;
       let dob=document.forms["myform"]["dob"].value;
       let add=document.forms["myform"]["address"].value;
       console.log("**DETAILS**");
        console.log("Name:"+name);
        console.log("Phone:"+phone);
        console.log("Email:"+email);
        console.log("Gender:"+gender);
        console.log("DOB:"+dob);
        console.log("Address:"+add);
        document.getElementById("detailhead").innerHTML="<h3>Details</h3>";
        document.getElementById("detail1").innerHTML="<span>Name:"+name+"</span>";
        document.getElementById("detail2").innerHTML="<span>Phone:"+phone+"</span>";
        document.getElementById("detail3").innerHTML="<span>Email:"+email+"</span>";
        document.getElementById("detail4").innerHTML="<span>Gender:"+gender+"</span>";
        document.getElementById("detail5").innerHTML="<span>DOB:"+dob+"</span>";
        document.getElementById("detail6").innerHTML="<span>Address:"+add+"</span>";
    }
    c=0;
    }
