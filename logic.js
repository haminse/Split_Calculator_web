var label = [];
var money = [];
var summ = 0;
var tax = 0;
var tip = 0;

//for tax
var ca_tax = 7.25; //2022 ver. %
var else_tax = 10;  //2022 ver. %

//for tips



// add friend icon and push elements in label[] when click add button
$('.add').click(function(){
    var label_1 = $('#label_1').val();

    console.log(label_1); // del
    
    label.push(label_1);
    
    console.log(label); // del
    $('.friends').append(`<div class = 'frn_list'>${label_1}</div>`);
    $('#label_1').val(''); // only web

    console.log(label_1); // del


});

// when click done(next), nondisplay the whoates section and turn on the split section.
$('.done').click(function(){
    console.log(label);
    $('.whoates').css('display', 'none');
    $('.asign').css('display', 'block');
    
    
    for(let i = 0; i < label.length; i++){

        $('.eats').append(`<div class = 'eats_${i}'>
        <label id = 'eats_label_${i}'><strong>How much ${label[i]} ates?</strong></label>
        <input id = 'eats_input_${i}' type="number"  placeholder="Price ($)">
        </div>`);
        $(`.eats_${i}`).css('margin-bottom', '3%');

    }
    

    });

//when click the eats_btn, push value in money arr
$('#eats_btn').click(function(){
    for(let i = 0; i < label.length; i++){
        var money_input = $(`#eats_input_${i}`).val();
        money.push(Number(money_input));
        console.log(money); // del
    $('.asign').css('display', 'none');
    $('.tax').css('display', 'block');
    }
    //cal summ
    for(let i = 0; i < money.length; i++){summ  += money[i]};
    });

//when click tax_btn, set radio_val value and del the section
$('.tax_btn').click(function(){
    var radio_val_tax = $('input[name = "flexRadioDefault"]:checked').val();
    // alert(radio_val_tax); //del
    $('.tax').css('display', 'none');
    $('.tip').css('display', 'block');

    //set tax
    switch(radio_val_tax){
        case "CA":
            tax = ca_tax;
            break;
        case "else":
            tax = else_tax;
            break;
    }

    
});
//radio_val_tax = 'CA' or 'else'
//radio_val_tip = '15', '18', '20' , 'custom'


$('.tip_btn').click(function(){

    // append the number input html here
    var radio_val_tip = $('input[name = "flexRadioDefault2"]:checked').val();
    // alert(radio_val_tip); //del
    $('.tip').css('display', 'none');
    $('.result').css('display', 'block');



    //set tip
    switch(radio_val_tip){
        case "15":
            tip = 15;
            break;

        case '18':
            tip = 18;
            break;

        case "20":
            tip = 20;
            break;

        case "custom":
            tip = $('#custom_input').val();
            break;

        }
    // alert(label); 
    // alert(money); 
    // alert(summ);
    // alert(tax); 
    // alert(tip); 
    
    //calculate
    var total = (summ * (1 + tax *0.01) * (1 + tip * 0.01)).toFixed(2);
    var final_money = money.map((x) => {return (x / summ *total).toFixed(2)});

    $('.total_price').text("Total Price : " + total + " $");

    for(let i = 0; i < label.length; i++){
        $('.result_show').append(`<p class = 'result_money'> ${label[i]} have to pay : ${final_money[i]}$</p>`);

        // $('.result_show').append(`<p class = 'result_money'> ${label[i]} has to pay : ${final_money[i]}$ (${(final_money[i]/total).toFixed(2)*100}%)</p>`);
    };
    
});



