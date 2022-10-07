function validateform() {
    let c=0;
    let w1=document.getElementById("warn1");
    let w2=document.getElementById("warn2");
    let f=document.getElementById("formdata");
    let x=document.forms["myform"]["name"].value;
    if( x==="")
   {document.getElementById('warn1').innerHTML='<h3>fill name correctly </h3>';
    }
   else
   {w1.style.display="none";
    c++;}
   if((document.forms["myform"]["phone"].value.length)!=10)
   {document.getElementById('warn2').innerHTML='<h3>fill phone number correctly </h3>';
}
   else
   {w2.style.display="none";
   c++;
    }
    if(c==2)
    {f.style.display="none";
    document.getElementById("end").innerHTML="<h1>Your Form is Submitted</h1>";}
    
}



