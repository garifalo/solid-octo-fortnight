// addEventListener("load", myFunction); instead of $(document).ready


$(document).ready(function () {
    $.getJSON('https://api.coindesk.com/v1/bpi/currentprice.json').then(data => {
        var price = data.bpi.USD.rate.split('.');
        $('#bitcoinRate').text('$' + price[0]);
    })

//ACCORDION JS *******
// *******************

    let accordion = document.getElementsByClassName("accordion-heading");
    let i;
    for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function(){
        /* Toggle between adding and removing the "active" class*/
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active element */
        let accord_text = this.nextElementSibling;
        if (accord_text.style.display === "block") {
            accord_text.style.display = "none";
        } else {
            accord_text.style.display = "block";
        }
    }
}




    const validator = (input) => {
        var e = input[0],
            type = input[0].type,
            val = input[0].value;
        if(type === 'text'){
            if (!/^[a-zA-Z]*$/.test(val) || val === '') {
                $(input).next().children('i.fa-check-circle').hide();
                $(input).next().children('i.fa-times-circle').fadeIn('200');
                return false
            }
            $(input).next().children('i.fa-times-circle').hide();  
            $(input).next().children('i.fa-check-circle').fadeIn('200');  
            return true
        }
        else if(type === 'email'){
            if (val === '' || val.indexOf('@') < 1) {
                $(input).next().children('i.fa-check-circle').hide();
                $(input).next().children('i.fa-times-circle').fadeIn('200');
                $('button').attr('disabled','disabled')
                return false
            }
            $('button').removeAttr('disabled')
            $(input).next().children('i.fa-times-circle').hide();  
            $(input).next().children('i.fa-check-circle').fadeIn('200');
            return true
        }
    }
    $('input').on('keyup blur', function (e) {
        validator($(this));
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        var first_name = $('input[name=first_name]'),
            last_name = $('input[name=last_name]'),
            email = $('input[name=email]'),
            terms = $('input[type=checkbox]').is(':checked');
        if (validator(first_name) && validator(last_name) && validator(email) && terms) {
            window.location = 'http://www.test.com/?first_name=' + first_name + '&last_name=' + last_name + '&email=' + email;
        }
    });

});
