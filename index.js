let em=document.getElementById("suggestion");
em.style.display="none";
function hide() {
    em.style.display="block";
}
function validateform() {
    let c=0;
    let w1=document.getElementById("warn1");
    let w2=document.getElementById("warn2");
    let f=document.getElementById("formdata");
    let f1=document.getElementById("end");
    let x=document.forms["myform"]["name"].value;
    let ph=document.forms["myform"]["phone"].value;
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
    {document.getElementById("warn3").innerHTML="<h3>Fill email correctly</h3>";
    }
    if(c==3)
    {f.style.display="none";
    f1.style.display="flex";
    document.getElementById("submit").style.display="none";
    f1.innerHTML="<h1>Your Form is Submitted</h1>";}
    
}









