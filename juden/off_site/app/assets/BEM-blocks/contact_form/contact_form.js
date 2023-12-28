$(document).ready(function() {
    $("#input-phone").keypress(function(t) {
        if (!(t = t || event).ctrlKey && !t.altKey)
            if ($("#input-phone").val()) {
                if (8 != t.keyCode && 48 != t.charCode && 49 != t.charCode && 50 != t.charCode && 51 != t.charCode && 52 != t.charCode && 53 != t.charCode && 54 != t.charCode && 55 != t.charCode && 56 != t.charCode && 57 != t.charCode) return !1
            } else if (8 != t.keyCode && 43 != t.charCode && 48 != t.charCode && 49 != t.charCode && 50 != t.charCode && 51 != t.charCode && 52 != t.charCode && 53 != t.charCode && 54 != t.charCode && 55 != t.charCode && 56 != t.charCode && 57 != t.charCode) return !1
    });

    $('button[type="submit"]').click(function(t) {
        $(".contact-form__textarea").val().length < 10 && (t.preventDefault(), $("#input-message-warning").css({
            margin: "2px 0 6px",
            transition: "height .5s",
            height: "30px"
        })), $("#input-id").val().length < 3 && (t.preventDefault(), $("#input-id").css({
            "margin-bottom": "0px"
        }), $("#input-id-warning").css({
            margin: "2px 0 6px",
            transition: "height .5s",
            height: "30px"
        }));
        var n = $("#input-email").val();
        (n.indexOf("@") <= 0 || n.indexOf("@") > n.lastIndexOf(".") || "." == n.charAt(n.length - 1)) && (t.preventDefault(), $("#input-email").css({
            "margin-bottom": "0px"
        }), $("#input-email-warning").css({
            margin: "2px 0 6px",
            transition: "height .5s",
            height: "30px"
        })), $("#input-phone").val().length < 13 && (t.preventDefault(), $("#input-phone").css({
            "margin-bottom": "0px"
        }), $("#input-phone-warning").css({
            margin: "2px 0 0",
            transition: "height .5s",
            height: "30px"
        }))
    });

    $(".contact-form__textarea").keyup(function() {
        10 <= $(this).val().length && $("#input-message-warning").css({
            margin: "0px",
            transition: "height .5s",
            height: "0px"
        })
    });

    $("#input-id").keyup(function() {
        3 <= $(this).val().length && ($("#input-id-warning").css({
            margin: "0px",
            transition: "height .5s",
            height: "0px"
        }), setTimeout(function() {
            $("#input-id").css({
                transition: "margin-bottom .5s",
                "margin-bottom": "15px"
            })
        }, 200))
    });

    $("#input-email").keyup(function(t) {
        var n = $("#input-email").val();
        0 < n.indexOf("@") && n.indexOf("@") < n.lastIndexOf(".") && "." != n.charAt(n.length - 1) && ($("#input-email-warning").css({
            margin: "0px",
            transition: "height .5s",
            height: "0px"
        }), setTimeout(function() {
            $("#input-email").css({
                transition: "margin-bottom .5s",
                "margin-bottom": "15px"
            })
        }, 200))
    });

    $("#input-phone").keyup(function() {
        13 <= $(this).val().length && $("#input-phone-warning").css({
            margin: "0px",
            transition: "height .5s",
            height: "0px"
        })
    })
});