function _(id) { return document.getElementById(id); }

function submitForm() {
    _("mybtn").disabled = true;
    _("status").innerHTML = 'please wait . . .';
    var formdata = new FormData();
        formdata.append( "name", _("name").value );
        formdata.append( "email", _("email").value );
        formdata.append( "msg", _("msg").value);
    var ajax = new XMLHttpRequest();
        ajax.open("POST", "email_parser.php" );
        ajax.onreadystatechange = function() {
            if(ajax.readyState == 4 && ajax.status == 200) {
                if(ajax.responseText == "success") {
                    _("contact_form").innerHTML = '<h2>Thank you ' + _("name").value + ', I will read your message and get back to you soon :)</h2>';
                }
                else {
                    _("status").innerHTML = ajax.responseText;
                    _("mybtn").disabled = false;
                }
            }
        }
    ajax.send ( formdata );
}