var label = [];
var money = [];


// add friend when click add button
$('.add').click(function(){
    var label_1 = $('#label_1').val();

    console.log(label_1); // del
    
    label.push(label_1);
    
    console.log(label); // del
    $('.friends').append(`<div class = 'frn_list'>${label_1}</div>`);
    $('#label_1').val(''); // only web

    console.log(label_1); // del


});


$('.done').click(function(){
    console.log(label);
    $('.whoates').css('display', 'none');
    });
    
    



