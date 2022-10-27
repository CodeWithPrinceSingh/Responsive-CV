var a = 1;
    var menuImage = document.getElementById('menu-image');

    function loadshow() {
        if (screen.availWidth <= 768) {
            document.getElementById('nav-slide').style.display = 'none';
            
        }
        else {
            document.querySelector('.open-nav').style.display = "none";
        }
    }

    function clickshow() {
        if (screen.availWidth <= 768) {
            if (a % 2 == 0) {
                document.getElementById('nav-slide').style.display = 'none';
                menuImage.setAttribute('src', 'menu-icon.png');
                a++;

            }
            else {
                document.getElementById('nav-slide').style.display = 'flex';
                menuImage.setAttribute('src', 'cross-icon.png');
                a++;
            }
        }
        else {
            document.querySelector('.open-nav').style.display = "none";
        }
    }