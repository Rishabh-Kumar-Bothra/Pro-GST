/**
 * Created by bothra on 7/7/17.
 */


window.onload = function () {

    var price = document.getElementById('price');
    var tax = document.getElementById('tax');
    var gst = document.getElementById('gst');
    var cal = document.getElementById('cal');

    document.getElementById('ans').style.visibility = 'hidden';
    
    cal.onclick = function () {
        calgst(price.value,tax.value,gst.value)
        
    }


};


function calgst(p,t,g) {
    p = parseInt(p);
    t = parseInt(t);
    g = parseInt(g);

    if(p==''|| t==''|| g== ''){
        alert("Fill all the boxes");
    }



    if(p && t && g) {
        let x = p / (1 + (t / 100));

        let ntax = x + ((g / 100) * x);


        document.getElementById('ans').style.visibility = 'visible';

        document.getElementById('new').innerHTML = "&#x20B9;" + ntax;

        return;


    }
}
