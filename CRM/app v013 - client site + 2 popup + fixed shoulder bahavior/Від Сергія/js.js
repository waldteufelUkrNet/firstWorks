$(document).ready(function () {

    /* ↓↓↓ field switch ↓↓↓ */
    $('.act-btn').click(function () {
        // buttons
        $('.act-btn').addClass('work-change-btn_active');
        $('.active-btn').removeClass('work-change-btn_active');
        $('.history-btn').removeClass('work-change-btn_active');

        //fields
        $('.act-btn-field').css({ 'transition': '.5s', 'opacity': '1' }).css({ 'z-index': '1' });
        $('.active-btn-field').css({ 'transition': '.5s', 'opacity': '0' }).css({ 'z-index': '-1' });
        $('.history-btn-field').css({ 'transition': '.5s', 'opacity': '0' }).css({ 'z-index': '-1' });
    });

    $('.active-btn').click(function () {
        // buttons
        $('.act-btn').removeClass('work-change-btn_active');
        $('.active-btn').addClass('work-change-btn_active');
        $('.history-btn').removeClass('work-change-btn_active');

        //fields
        $('.act-btn-field').css({ 'transition': '.5s', 'opacity': '0' }).css({ 'z-index': '-1' });
        $('.active-btn-field').css({ 'transition': '.5s', 'opacity': '1' }).css({ 'z-index': '1' });
        $('.history-btn-field').css({ 'transition': '.5s', 'opacity': '0' }).css({ 'z-index': '-1' });
    });

    $('.history-btn').click(function () {
        // buttons
        $('.act-btn').removeClass('work-change-btn_active');
        $('.active-btn').removeClass('work-change-btn_active');
        $('.history-btn').addClass('work-change-btn_active');

        //fields
        $('.act-btn-field').css({ 'transition': '.5s', 'opacity': '0' }).css({ 'z-index': '-1' });
        $('.active-btn-field').css({ 'transition': '.5s', 'opacity': '0' }).css({ 'z-index': '-1' });
        $('.history-btn-field').css({ 'transition': '.5s', 'opacity': '1' }).css({ 'z-index': '1' });
    });
    /* ↑↑↑ /field switch ↑↑↑ */


    /* ↓↓↓ ACCORDION ↓↓↓ */
    var arrOfAcCon = $('.accordion-content');
    var arrOfAcBtn = $('.accordion-btn');

    $(arrOfAcBtn).click(function () {

        //where was click
        outer:
        for (var i = 0; i < arrOfAcBtn.length; i++) {
            if (arrOfAcBtn[i] == this) {
                var temp = i;
                break outer;
            }
        }

        //open accordion content + button animation
        if (arrOfAcCon[temp].isOpen) {
            $(arrOfAcCon[temp]).css({ 'transition': 'height .5s', 'height': '0px' }).css({ 'border-width': '0px' });
            arrOfAcCon[temp].isOpen = false;

            $(arrOfAcBtn[temp]).children('.accordion-btn__2-line').css({ 'transition': 'width .5s', 'width': '0px' });
            setTimeout(function () {
                $(arrOfAcBtn[temp]).children('.accordion-btn__1-line').css({ 'height': '16px' });
                $(arrOfAcBtn[temp]).children('.accordion-btn__2-line').css({ 'width': '16px' })
            }, 500);
            $(arrOfAcBtn[temp]).removeClass('accordion-btn_active');

            return
        }

        if (!arrOfAcCon[temp].isOpen) {
            for (var i = 0; i < arrOfAcCon.length; i++) {
                $(arrOfAcCon[i]).css({ 'transition': 'height .5s', 'height': '0px' }).css({ 'border-width': '0px' });
                arrOfAcCon[i].isOpen = false;

                $(arrOfAcBtn[i]).children('.accordion-btn__1-line').css({ 'height': '16px' });
                $(arrOfAcBtn[i]).children('.accordion-btn__2-line').css({ 'width': '16px' })
                $(arrOfAcBtn[i]).removeClass('accordion-btn_active');
            }

            $(arrOfAcCon[temp]).css({ 'border-width': '1px' }).css({ 'transition': 'height .5s', 'height': '265px' });
            arrOfAcCon[temp].isOpen = true;

            $(arrOfAcBtn[temp]).children('.accordion-btn__1-line').css({ 'transition': 'height .5s', 'height': '0px' });
            $(arrOfAcBtn[temp]).children('.accordion-btn__2-line').css({ 'transition': 'width .5s', 'width': '0px' });
            setTimeout(function () {
                $(arrOfAcBtn[temp]).children('.accordion-btn__2-line').css({ 'width': '16px' })
            }, 500);
            $(arrOfAcBtn[temp]).addClass('accordion-btn_active');
        }

    });
    /* ↑↑↑ /ACCORDION ↑↑↑ */

    /* ↓↓↓ language-switcher ↓↓↓ */
    var isLanguageSwitcherOpen = false;
    var isLanguageSwitcherOpen2 = false;
    var selectedLanguage;
    $('.language-switcher__btn').click(function () {
        if (isLanguageSwitcherOpen == false) {
            $('.language-switcher__flag-container').css({ 'transition': 'height .5s', 'height': '300%', 'z-index': '8888' });
            isLanguageSwitcherOpen = true;
            return
        }

        $('.language-switcher__flag-container').css({ 'transition': 'height .5s', 'height': '100%', 'z-index': '8888' });
        isLanguageSwitcherOpen = false;
        return
    });

    $('.language-switcher__flag-en').click(function () {
        if (selectedLanguage == 'en' && isLanguageSwitcherOpen2 == false) {
            $('.language-switcher__flag-container').css({ 'transition': 'height .5s', 'height': '200%', 'z-index': '8888' });
            $('.language-switcher__flag-ru').css({ 'display': 'block', 'z-index': '8888' });
            isLanguageSwitcherOpen2 = true;
            return
        }
        if (isLanguageSwitcherOpen2 == true) {
            $('.language-switcher__flag-container').css({ 'transition': 'height .5s', 'height': '100%', 'z-index': '8888' });
            $('.language-switcher__flag-ru').css({ 'display': 'none' });
            isLanguageSwitcherOpen2 = false;
            return
        }
        $('.language-switcher__flag-container').css({ 'transition': 'height .5s', 'height': '100%', 'z-index': '8888' });
        $('.language-switcher__btn').css({ 'display': 'none' });
        $('.language-switcher__flag-ru').css({ 'display': 'none' });
        isLanguageSwitcherOpen = false;
        selectedLanguage = 'en';
    });

    $('.language-switcher__flag-ru').click(function () {
        if (selectedLanguage == 'ru' && isLanguageSwitcherOpen2 == false) {
            $('.language-switcher__flag-container').css({ 'transition': 'height .5s', 'height': '200%', 'z-index': '8888' });
            $('.language-switcher__flag-en').css({ 'display': 'block' });
            isLanguageSwitcherOpen2 = true;
            return
        }
        if (isLanguageSwitcherOpen2 == true) {
            $('.language-switcher__flag-container').css({ 'transition': 'height .5s', 'height': '100%', 'z-index': '8888' });
            $('.language-switcher__flag-en').css({ 'display': 'none' });
            isLanguageSwitcherOpen2 = false;
            return
        }
        $('.language-switcher__flag-container').css({ 'transition': 'height .5s', 'height': '100%', 'z-index': '8888' });
        $('.language-switcher__btn').css({ 'display': 'none' });
        $('.language-switcher__flag-en').css({ 'display': 'none' });
        isLanguageSwitcherOpen = false;
        selectedLanguage = 'ru';
    });
    /* ↑↑↑ /language-switcher ↑↑↑ */

    /* ↓↓↓ menu-btn ↓↓↓ */
    var isMenuOpen;
    var isClickAble = true;
    $('.menu-btn').click(function () {
        if (isClickAble) {
            isClickAble = false;
            setTimeout(function () {
                isClickAble = true;
            }, 500);

            $('.menu-btn').click = null;
            if (!isMenuOpen) {
                $('.menu-btn__1-line').css({ 'transition': '.5s', 'top': '9px' });
                $('.menu-btn__3-line').css({ 'transition': '.5s', 'top': '9px' });
                $('.menu-btn__2-line').css({ 'transition': '.5s', 'opacity': '0' });
                setTimeout(function () {
                    $('.menu-btn__1-line').css({ 'transition': '.5s', 'transform': 'rotate(45deg)' });
                    $('.menu-btn__3-line').css({ 'transition': '.5s', 'transform': 'rotate(-45deg)' });
                }, 500);
                isMenuOpen = true;

                toggleMenu(true);
                return
            }
            if (isMenuOpen) {
                $('.menu-btn__1-line').css({ 'transition': '.5s', 'transform': 'rotate(0deg)' });
                $('.menu-btn__3-line').css({ 'transition': '.5s', 'transform': 'rotate(0deg)' });
                $('.menu-btn__2-line').css({ 'transition-delay': '.5s', 'transition-duration': '.5s', 'opacity': '1' });
                setTimeout(function () {
                    $('.menu-btn__1-line').css({ 'transition-duration': '.5s', 'top': '0px' });
                    $('.menu-btn__3-line').css({ 'transition-duration': '.5s', 'top': '18px' });
                }, 500);
                isMenuOpen = false;

                toggleMenu(false);
                return
            }
        }
    });

    function toggleMenu(arg) {
        var arrOfLinks = $('.menu-list-a');

        if (arg == true) {
            $('.menu').css({ 'border-width': '1px' })
                .css({ 'transition': '.5s', 'height': '182px' });

            setTimeout(function () {
                var temp1 = 0;
                var temp2 = '0s';
                for (var i = 0; i < arrOfLinks.length; i++) {
                    $(arrOfLinks[i]).css({ 'transition': '.2s', 'transition-delay': temp2, 'left': '0%' });
                    temp1 += 0.1;
                    temp2 = temp1 + 's';
                }
            }, 500);
        }
        if (arg == false) {
            var temp1 = 0;
            var temp2 = '0s';
            for (var i = 0; i < arrOfLinks.length; i++) {
                $(arrOfLinks[i]).css({ 'transition': '.2s', 'transition-delay': temp2, 'left': '100%' });
                temp1 += 0.1;
                temp2 = temp1 + 's';
            }
            setTimeout(function () {
                $('.menu').css({ 'border-width': '0px' })
                    .css({ 'transition': '.5s', 'height': '0px' });
            }, 600);
        }
    };
    /* ↑↑↑ /menu-btn ↑↑↑ */

    /* ↓↓↓ shoulder ↓↓↓ */
    /* ↓↓↓ keys filfering ↓↓↓ */
    $('#investment').keypress(function (e) {
        e = e || event;
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        if (e.keyCode == 8 || e.keyCode == 13 || e.charCode == 46 ||
            e.charCode == 48 || e.charCode == 49 || e.charCode == 50 ||
            e.charCode == 51 || e.charCode == 52 || e.charCode == 53 ||
            e.charCode == 54 || e.charCode == 55 || e.charCode == 56 ||
            e.charCode == 57) {
            //multipleShoulder();
        } else {
            return false;
        }
    });
    /* ↑↑↑ /keys filfering ↑↑↑ */

    /* ↓↓↓ calculation ↓↓↓ */
    $('#investment').keyup(function () {
        multipleShoulder();
    });
    /* ↑↑↑ /calculation ↑↑↑ */

    /* ↓↓↓ onoff switcher ↓↓↓ */
    var onoffSwitcherToggle = 'off';
    $('.onoff-switcher__thumb').click(function () {
        if (onoffSwitcherToggle == 'off') {
            $('.onoff-switcher__thumb').css({ 'transition': '.5s', 'left': '35px' });
            $('.shoulder__body').css({ 'transition': '0.5s', 'height': '64px' });

            $('.shoulder__round1').addClass('shoulder-point shoulder__round_active');
            shoulderValue = 50;
            $('#shoulderValue').val(shoulderValue);

            multipleShoulder();
            onoffSwitcherToggle = 'on';
            return
        }
        if (onoffSwitcherToggle == 'on') {
            $('.onoff-switcher__thumb').css({ 'transition': '.5s', 'left': '0px' });
            $('.shoulder__body').css({ 'transition': '.5s', 'height': '0px' });

            removeChangeShoulder();
            onoffSwitcherToggle = 'off';
            return
        }
    });
    /* ↑↑↑ /onoff switcher ↑↑↑ */

    /* ↓↓↓ shoulder thumb ↓↓↓ */
    var arrOfPoints = $('.shoulder-point');
    var arrOfLines = $('.shoulder-line');
    var shoulderValue = 0;

    $(arrOfPoints).click(function () {
        for (var i = 0; i < arrOfPoints.length; i++) {
            if (arrOfPoints[i] == this) {
                changeShoulder(i);
                return;
            }
        }
    });

    function changeShoulder(arg) {
        removeChangeShoulder();

        for (var i = 0; i <= arg; i++) {
            $(arrOfLines[i - 1]).addClass('shoulder__subline_active');
            $(arrOfPoints[i - 1]).addClass('shoulder__round_sub-active');
        }
        $(arrOfPoints[arg]).addClass('shoulder__round_active');
        shoulderValue = 50 * (i);
        $('#shoulderValue').val(shoulderValue);
        multipleShoulder(shoulderValue);
    }

    function removeChangeShoulder() {
        for (var i = 0; i < arrOfPoints.length; i++) {
            $(arrOfLines[i]).removeClass('shoulder__subline_active');
            $(arrOfPoints[i]).removeClass('shoulder__round_sub-active shoulder__round_active');
        }
        shoulderValue = 0;
        $('#shoulderValue').val(shoulderValue);
    }

    function multipleShoulder() {
        var temp = $('#investment').val();
        var result = temp * shoulderValue;
        $('#investment-result').text(result);
    }

    $('#investment').change(function () {
        multipleShoulder(shoulderValue);
    });
    /* ↑↑↑ /shoulder thumb ↑↑↑ */
    /* ↑↑↑ /shoulder ↑↑↑ */

    /* ↓↓↓ simple-switcher ↓↓↓ */
    var simpleSwitcherToggle = 'demo';
    $('.simple-switcher__thumb').click(function () {
        if (simpleSwitcherToggle == 'demo') {
            $('.simple-switcher__thumb').css({ 'transition': '.2s', 'left': '35px' });
            simpleSwitcherToggle = 'real'

            $('.central-part__account-type span').text('Real');

            return
        }
        if (simpleSwitcherToggle == 'real') {
            $('.simple-switcher__thumb').css({ 'transition': '.2s', 'left': '0px' });
            simpleSwitcherToggle = 'demo'

            $('.central-part__account-type span').text('Demo');

            return
        }
    });
    /* ↑↑↑ /simple-switcher ↑↑↑ */

    /* ↓↓↓ make-lodgement ↓↓↓ */
    // поява
    $('.central-part__btn').click(function () {

        $('.make-lodgement').css({ 'transition': 'top .2s', 'top': '50%' });

        setTimeout(function () {
            $('.make-lodgement').css({ 'transition': 'width .3s', 'width': '400px' });
        }, 200);

        setTimeout(function () {
            $('.make-lodgement').css({ 'transition': 'height .3s', 'height': '162px' });
            $('.make-lodgement__pay-system').css({ 'display': 'block' });
        }, 500);

        setTimeout(function () {
            $('.make-lodgement__pay-system').css({ 'transition': '.3s', 'left': '0px' });
        }, 800);

        setTimeout(function () {
            $('.make-lodgement__close-btn').css({ 'transition': '.5s', 'transform': 'rotate(180deg)' });
            $('.make-lodgement__close-btn-line1, .make-lodgement__close-btn-line2').css({ 'transition': 'width .5s', 'width': '24px' });
        }, 1100);

        setTimeout(function () {
            $('.make-lodgement__triangle').css({ 'transition': '.3s', 'right': '8px' });
        }, 1600);
    });

    // кліки
    $('.make-lodgement__pay-system:first').click(function () {
        $('.make-lodgement__triangle').css({ 'transition': '.5s', 'top': '44px' });
        $('.make-lodgement').css({ 'transition': 'height .3s', 'height': '192px' });
        $('.make-lodgement-MasterCard').css({ 'transition': '.5s', 'height': '30px' });
        $('.make-lodgement-VISA').css({ 'transition': '.5s', 'height': '0px' });
    });

    $('.make-lodgement__pay-system:last').click(function () {
        $('.make-lodgement__triangle').css({ 'transition': '.5s', 'top': '104px' });
        $('.make-lodgement').css({ 'transition': 'height .3s', 'height': '192px' });
        $('.make-lodgement-VISA').css({ 'transition': '.5s', 'height': '30px' });
        $('.make-lodgement-MasterCard').css({ 'transition': '.5s', 'height': '0px' });
    });

    // закриття
    $('.make-lodgement__close-btn').click(function () {

        $('.make-lodgement-VISA').css({ 'transition': '.3s', 'height': '0px' });
        $('.make-lodgement-MasterCard').css({ 'transition': '.3s', 'height': '0px' });
        $('.make-lodgement').css({ 'transition': 'height .3s', 'height': '162px' });
        $('.make-lodgement__triangle').css({ 'transition': '.3s', 'right': '-12px' });

        setTimeout(function () {
            $('.make-lodgement__triangle').css({ 'top': '74px' });
        }, 300);

        setTimeout(function () {
            $('.make-lodgement__pay-system:even').css({ 'transition': '.3s', 'left': '110%' });
            $('.make-lodgement__pay-system:odd').css({ 'transition': '.3s', 'left': '-110%' });
        }, 400);

        setTimeout(function () {
            $('.make-lodgement__close-btn').css({ 'transition': '.5s', 'transform': 'rotate(0deg)' });
            $('.make-lodgement__close-btn-line1, .make-lodgement__close-btn-line2').css({ 'transition': 'width .5s', 'width': '0px' });
        }, 700);

        setTimeout(function () {
            $('.make-lodgement').css({ 'transition': 'height .3s', 'height': '20px' });
            $('.make-lodgement__pay-system').css({ 'display': 'none' });
        }, 1200);

        setTimeout(function () {
            $('.make-lodgement').css({ 'transition': 'width .3s', 'width': '120px' });
        }, 1500);

        setTimeout(function () {
            $('.make-lodgement').css({ 'transition': 'top .2s', 'top': '-10%' });
        }, 1800);
    });

    // inputs - only for numbers and dots
    $('.make-lodgement__pay-block input').keypress(function (e) {
        e = e || event;
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        var chr = getChar(e);
        console.log("chr", chr);
        // с null надо осторожно в неравенствах, т.к. например null >= '0' => true на всякий случай лучше вынести проверку chr == null отдельно
        if (chr == null) return;
        if ((chr < '0' || chr > '9') && chr != '.') {
            return false;
        }
        function getChar(event) {
            if (event.which == null) {
                if (event.keyCode < 32) return null;
                return String.fromCharCode(event.keyCode) // IE
            }
            if (event.which != 0 && event.charCode != 0) {
                if (event.which < 32) return null;
                return String.fromCharCode(event.which) // остальные
            }
            return null; // специальная клавиша
        }
    });
    /* ↑↑↑ /make-lodgement ↑↑↑ */

    /* ↓↓↓ bue-cell-ok-info ↓↓↓ */
    // поява
    $('.btn-bue, .btn-cell').click(function () {

        $('.bue-cell-ok-info').css({ 'transition': 'top .2s', 'top': '50%' });

        setTimeout(function () {
            $('.bue-cell-ok-info').css({ 'transition': 'width .3s', 'width': '400px' });
        }, 200);

        setTimeout(function () {
            $('.bue-cell-ok-info').css({ 'transition': 'height .3s', 'height': '162px' });
            $('.bue-cell-ok-info__info-string').css({ 'display': 'block' });
            $('.bue-cell-ok-info__close-btn-ok').css({ 'display': 'block' });
        }, 500);

        setTimeout(function () {
            $('.bue-cell-ok-info__info-string').css({ 'opacity': '1' });
            $('.bue-cell-ok-info__close-btn-ok').css({ 'bottom': '20px' });
        }, 800);

        setTimeout(function () {
            $('.bue-cell-ok-info__close-btn').css({ 'transition': '.5s', 'transform': 'rotate(180deg)' });
            $('.bue-cell-ok-info__close-btn-line1, .bue-cell-ok-info__close-btn-line2').css({ 'transition': 'width .5s', 'width': '24px' });
        }, 1100);

    });

    // закриття
    $('.bue-cell-ok-info__close-btn, .bue-cell-ok-info__close-btn-ok ').click(function () {
        $('.bue-cell-ok-info__close-btn-ok').css({ 'display': 'none', 'bottom': '-30px' });
        $('.bue-cell-ok-info__info-string').css({ 'display': 'none', 'opacity': '0' });

        setTimeout(function () {
            $('.bue-cell-ok-info__close-btn').css({ 'transition': '.5s', 'transform': 'rotate(0deg)' });
            $('.bue-cell-ok-info__close-btn-line1, .bue-cell-ok-info__close-btn-line2').css({ 'transition': 'width .5s', 'width': '0px' });
        }, 300);

        setTimeout(function () {
            $('.bue-cell-ok-info').css({ 'transition': 'height .3s', 'height': '20px' });
        }, 800);

        setTimeout(function () {
            $('.bue-cell-ok-info').css({ 'transition': 'width .3s', 'width': '120px' });
        }, 1100);

        setTimeout(function () {
            $('.bue-cell-ok-info').css({ 'transition': 'top .2s', 'top': '-10%' });
        }, 1400);
    });
    /* ↑↑↑ /bue-cell-ok-info ↑↑↑ */





























});