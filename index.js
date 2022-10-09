var c=0;
let em=document.getElementById("suggestion");
em.style.display="none";
let w3=document.getElementById("warn4");
function show() {
    em.style.display="block";
}
function hide() {
    em.style.display="none";
    let pw=document.forms["myform"]["password"].value;
    let pw1=document.forms["myform"]["password2"].value;
    console.log(pw);
    console.log(w3);
    console.log(pw.length);
    if((pw.length)<6)
    {console.log("condition checked");
    w3.style.display="block";
    w3.innerHTML="<h3>Password length must be at least 6 Characters</h3>";
    }
   else
   {w3.style.display="none";
   return 1;
    }   
}
function validateform() {
    let w1=document.getElementById("warn1");
    let w2=document.getElementById("warn2");
    let f=document.getElementById("formdata");
    let f1=document.getElementById("end");
    let x=document.forms["myform"]["name"].value;
    let ph=document.forms["myform"]["phone"].value;
    console.log(ph);
    console.log(em);
    if( x==="")
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
    }
    else
    {document.getElementById("warn3").innerHTML="<h3>Fill email correctly!!</h3>";
    }
   c+=hide();
   console.log(hide());
   console.log(c);
    if(c==4)
    {f.style.display="none";
    f1.style.display="flex";
    document.getElementById("submit").style.display="none";
    f1.innerHTML="<h1>Your Form is Submitted</h1>";}
   c=0; 
    
