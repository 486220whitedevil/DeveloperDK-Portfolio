/* =========================================================
   DEEPAK KEWAT PORTFOLIO
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DOM ELEMENTS
       ===================================================== */

    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector(".header");


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (menuIcon && navbar) {

        menuIcon.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            const isOpen =
                navbar.classList.toggle("active");


            /* Change menu icon */

            menuIcon.innerHTML = isOpen
                ? '<i class="bx bx-x"></i>'
                : '<i class="bx bx-menu"></i>';


            /* Accessibility */

            menuIcon.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuIcon.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        });


        /* =================================================
           CLOSE MENU AFTER CLICKING NAV LINK
           ================================================= */

        const navLinks =
            navbar.querySelectorAll("a");


        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");


                menuIcon.innerHTML =
                    '<i class="bx bx-menu"></i>';


                menuIcon.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuIcon.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });


        /* =================================================
           CLOSE MENU WHEN CLICKING OUTSIDE
           ================================================= */

        document.addEventListener("click", (event) => {

            if (
                !navbar.classList.contains("active")
            ) {
                return;
            }


            const clickedInsideNavbar =
                navbar.contains(event.target);


            const clickedMenuButton =
                menuIcon.contains(event.target);


            if (
                !clickedInsideNavbar &&
                !clickedMenuButton
            ) {

                navbar.classList.remove("active");


                menuIcon.innerHTML =
                    '<i class="bx bx-menu"></i>';


                menuIcon.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuIcon.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        });


        /* =================================================
           ESC KEY
           ================================================= */

        document.addEventListener("keydown", (event) => {

            if (
                event.key === "Escape" &&
                navbar.classList.contains("active")
            ) {

                navbar.classList.remove("active");


                menuIcon.innerHTML =
                    '<i class="bx bx-menu"></i>';


                menuIcon.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuIcon.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        });

    }


    /* =====================================================
       ACTIVE PAGE NAVIGATION
       ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    const navigationLinks =
        document.querySelectorAll(".navbar a");


    navigationLinks.forEach((link) => {

        const linkPage =
            link.getAttribute("href")
                ?.split("/")
                .pop()
                .toLowerCase();


        link.classList.remove("active");


        if (
            (currentPage === "" ||
             currentPage === "index.html") &&
            (linkPage === "index.html" ||
             linkPage === "")
        ) {

            link.classList.add("active");

        }
        else if (
            linkPage &&
            linkPage === currentPage
        ) {

            link.classList.add("active");

        }

    });


    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 30) {

                header.classList.add("scrolled");

            }
            else {

                header.classList.remove("scrolled");

            }

        };


        window.addEventListener(
            "scroll",
            updateHeader,
            { passive: true }
        );


        updateHeader();

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const currentYear =
        document.querySelector("#current-year");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }

});