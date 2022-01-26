
//put refrence to where the function came from
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  

//alert("test");


//use location object to access querystring (address bar)
const queryString = window.location.search;
let myData = '';//will store data for output
let myCart = '';//wil store info about cart contents
let myTotal = 0;//cost of items in cart



if(queryString != ""){//process data
 
    //separate querystring parameters
    const urlParams = new URLSearchParams(queryString);
    /*
    Print all data to id of output on page


    */

   

        urlParams.forEach(function(value, key) {

        if(key=="Cart"){//Add price of cart items
           // alert(value);
           

    
       switch(value){
    
        case "Widget":
    myCart += "Widget: $3.99<br />"
    myTotal += 3.99;
    break;

        case "Sprocket":
        myCart += "Sprocket: $5.99<br />"
        myTotal += 5.99;
        break;
        
        case "Thingy":
            myCart += "Thingy: $1.99<br />"
            myTotal += 1.99;
            break;
    }


        }else{//build the shippimng info

/*
here we apply title case to?

key, First_Name, Last_Nmae, Address, City
value = titleCase(value);

*/ 
   switch(key){
    case "First_Name":
        case "Last_Name":
            case "Address":
                case "City":
        value = titleCase(value);
    break;
}
            //will replace underscore with space
        //https://stackoverflow.com/questions/542232/in-javascript-how-can-i-perform-a-global-replace-on-string-with-a-variable-insi
        key = key.split("_").join(" ");
        myData += `<p>${key}: ${value}</p>`; 
    

        }
        });

        myCart = `<h3>Cart Contents</h3>
        <p> ${myCart} </p>
        <p> Total: $${myTotal}</p>
        `;

     myData = myCart + '<h3>Shipping info</h3>' + myData;
     myData += `<p><a href= "index.html">CLEAR</a></p>`;

    document.getElementById("output").innerHTML = myData;

    }


