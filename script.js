// https://github.com/talhabytheway

// TODO to add the tasks

var netBalance = document.getElementById('balanceAmount');
var income = document.getElementById('inc');
var expense = document.getElementById('exp');


var net = parseFloat(netBalance.innerHTML);
var inc = parseFloat(income.innerHTML);
var exp = parseFloat(expense.innerHTML);




function addTrans() {
    let amount = parseFloat(document.getElementById('amount').value);
    let descrip = document.getElementById('descrip').value;
     
    if (amount) {   
    let ul = document.getElementById('hisCont');
    let li = document.createElement('li');

    
            if (amount>=0) {
                    li.innerHTML = `<li class="history">
                    <span class="des">${descrip}</span>
                    <div class="his-comp">
                        $<span class="amount">${amount}</span>
                        <span onclick="rem()" class="close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </span>
                        <span class="bar"></span>
                    </div>
                </li>`;                
            } else {
                    li.innerHTML = `<li class="history">
                    <span class="des">${descrip}</span>
                    <div class="his-comp">
                        $<span class="amount">${amount}</span>
                        <span onclick="rem()" class="close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </span>
                        <span class="bar color"></span>
                    </div>
                </li>`;
            }

    ul.appendChild(li)


    net += amount

    if (amount>=0) {
        inc+=amount
    } else {
        exp+=amount;
    }

        netBalance.innerText = net
        income.innerText = inc
        expense.innerText = exp*-1;
} else alert('Enter Correct Value')
}


function rem(){
    var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement.parentElement;
    div.style.display = "none";
    var value = div.querySelector('.amount').innerText
    console.log(value);

    net -= value
    if (value >= 0) {
      inc -= value;
    } else {
      exp -= value;
    }

    netBalance.innerText = net;
    income.innerText = inc;
    expense.innerText = exp * -1;
  }
}}
