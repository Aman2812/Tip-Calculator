// tip-increment fxn //

function tip_increment() {                                          
  document.getElementById("tip-input").stepUp();   
  amount_handler();
}

// tip-Decrement fxn //

function tip_decrement() {
  document.getElementById("tip-input").stepDown();   
  amount_handler();
}

// No Of People increment //

function people_increment() {
  document.getElementById("people-input").stepUp();
  amount_handler();
}

// No Of People decrement //

function people_decrement() {
  document.getElementById("people-input").stepDown();
  amount_handler();
}

// To calculate Tip-Amount and Total amount per person //

function amount_handler() {
  var bill = document.getElementsByName("bill")[0].value;
  var tip = document.getElementsByName("tip")[0].value;
  var people = document.getElementsByName("people")[0].value;
    
// exceptional Handling //
// It will throw an error if the following conditions are not satisfied //
    
  try {  
      
    if (bill<0 || tip< 0 || people<=0 || tip> 40 || people> 10 ) {  
      throw new  err
    }
    else{
        var tip_amount = (bill * tip) / (100 * people);
        var total_amount = bill / people + tip_amount;
        document.getElementById("tip-amount").innerHTML = "$" + tip_amount.toFixed(2);
        document.getElementById("total-amount").innerHTML = "$" + total_amount.toFixed(2);
    }
  }
  catch(err) {
        var tip_amount = 'NaN';
        var total_amount = 'NaN';
        document.getElementById("tip-amount").innerHTML =  tip_amount;
        document.getElementById("total-amount").innerHTML = total_amount;
  }

}