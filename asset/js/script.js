let status = true
let left = 0;
let page = 0;
let choice = "AI1";

$(document).ready(() => {
    let lst_video = document.querySelectorAll(".header2 .projects .video")
    let lst_copy = [...lst_video]
    // OPEN DETAIL PROJECT SECTION
    $(".header2 .projects .video").click(() => {
        $(".header2 .detail-project").css("opacity", "1");
        $(".header2 .detail-project").css("visibility", "visible");
    });
    $(".header2 .detail-project .close-btn").click(() => {
        $(".header2 .detail-project").css("opacity", "0");
        $(".header2 .detail-project").css("visibility", "hidden");
        $(".header2 .detail-project .description .description-image").empty();
    });

    // OPEN DETAIL SKILL SECTION
    $(".header3 .baris1 .kolom").click(() => {
        $(".header3 .detail-skill").css("opacity", "1")
        $(".header3 .detail-skill").css("visibility", "visible")
    });
    $(".header3 .detail-skill .close-btn").click(() => {
        $(".header3 .detail-skill").css("opacity", "0")
        $(".header3 .detail-skill").css("visibility", "hidden")
    });

    // ARROW LEFT & RIGHT DETAIL PROJECT SECTION
    $(".header2 .detail-project .description .btn-description i.left").click(() => {
        let image_items = document.querySelectorAll(".img1");
        if (left > ((-100 * image_items.length) + 100)) {
            left -= 100;
            $(".header2 .detail-project .description .description-image .img1").css("left", `${left}%`);
        }
    })
    $(".header2 .detail-project .description .btn-description i.right").click(() => {
        if (left < 0) {
            left += 100;
            $(".header2 .detail-project .description .description-image .img1").css("left", `${left}%`);
        }

    })
    // LIGHTS MAHESA PNG SECTION
    $(".header1 .lamp img").click(() => {
        $(".header1 .light").toggleClass("lightOn");
        $(".header1 img.mahesa").toggleClass("mahesaOn");
    });

    // BUTTON PROJECT CLICKED
    $(".header2 .button-project").click(() => {
        if (status) {
            anime({
                targets: '.circle1',
                color: (el) => {
                    return el.getAttribute('data-color');
                },
                translateX: function (el) {
                    return el.getAttribute('data-x');
                },
                translateY: function (el, i) {
                    return 40 + (-50 * i);
                },
                scale: function (el, i, l) {
                    if (i === 3) {
                        return (l - i) + 1.5;
                    } else if (i === 4) {
                        return (l - i) + 1.5;
                    }
                    return (l - i) + 0;
                },
                rotate: '1turn',
                borderRadius: function () { return ['50%', anime.random(10, 35) + '%']; },
                duration: function () { return anime.random(1200, 1800); },
                delay: function () { return anime.random(0, 400); },
                direction: 'easeInOutSine',
                // loop: true
            });
            status = false
        } else {
            anime({
                targets: '.circle1',
                translateX: 0,
                translateY: 0,
                scale: 0,
                rotate: 0,
                borderRadius: '0%',
                duration: function () { return anime.random(1200, 1800); },
                delay: function () { return anime.random(0, 400); },
                direction: 'easeInOutSine',
            });
            status = true
        }
    })
    new TypeIt("#chat", {
        speed: 50,
        startDelay: 900,
        loop: true
    })
        .type("hi! 'am nterestd!!", { delay: 100 })
        .move(-10, { speed: 25, delay: 100 })
        .type('I')
        .move('START')
        .move(1, { delay: 200 })
        .delete(1)
        .type('H')
        .move(15, { delay: 200 })
        .type('e', { delay: 250 })
        .move('END')
        .type('<br> Calling you lter...')
        .move(-6)
        .type('a')
        .move('END')
        .delete(8, { delay: 600 })
        .type('<em><strong>now!!</strong></em>')
        .go();

    $(".outter-wrapper .arrow-right i").click(() => {
        if (page === 0) {
            $(".outter-wrapper .wrap").css("left", "-500%");
            $(".outter-wrapper .arrow-right").css({
                "display": "block",
                "color": "#fff"
            });
            $(".outter-wrapper .arrow-left").css({
                "display": "block",
                "color": "#fff"
            });
            page += 1;
        } else if (page === 1) {
            $(".outter-wrapper .wrap").css("left", "-600%");
            page += 1
        } else if (page === 2) {
            $(".outter-wrapper .wrap").css("left", "-700%");
            $(".outter-wrapper .arrow-right").css({
                "display": "none",
            });
            $(".outter-wrapper .arrow-left").css({
                "color": "#fff"
            });
            page += 1
        }
    });
    $(".outter-wrapper .arrow-left i").click(() => {
        if (page === 1) {
            $(".outter-wrapper .wrap").css("left", "0%");
            $(".outter-wrapper .arrow-left").css({
                "display": "none",
            });
            $(".outter-wrapper .arrow-right").css({
                "color": "rgb(0,0,0)",
            });
            page -= 1;
        } else if (page === 2) {
            $(".outter-wrapper .wrap").css("left", "-500%");
            page -= 1
        } else if (page === 3) {
            $(".outter-wrapper .wrap").css("left", "-600%");
            $(".outter-wrapper .arrow-right").css({
                "display": "block",
                "color": "#fff"
            });
            $(".outter-wrapper .arrow-left").css({
                "color": "#fff"
            });
            page -= 1
        }
    });

    // COMMAND FOR CHOOSE PROJECTS
    $(".header2 .circle1").click(function () {
        choice = this.getAttribute("data-tipe");
        $(".active").removeClass("active")
        $(this).addClass("active")
        remove_element();
        if (choice === "DG") {
            lst_copy.map((item, i) => {
                fetch("./data_complete.json")
                    .then(res => res.json())
                    .then(res => {
                        create_img(item, res[choice][i]["link"][0]);
                    })
            })
        } else {
            lst_copy.map((item, i) => {
                fetch("./data_complete.json")
                    .then(res => res.json())
                    .then(res => {
                        create_iframe(item, res[choice][i]["link"]);
                    })
            })
        }
    });

    // SKILL CLICKED
    $(".header3 .wrapper-isi .kolom").click(function () {
        $(".header3 .detail-skill img").attr("src", $(this).children("img").attr('src'));
        $(".header3 .detail-skill h4").html(this.getAttribute("data-bahasa"));
        $(".header3 .detail-skill p").html(this.getAttribute("data-pesan"));
    });

    // ONE OF VIDEO CLICKED
    $(".header2 .projects .video").click(async function () {
        let str_img = "";
        let indx = this.getAttribute("data-index");
        let data = await get_data();
        let [tech_ol, algoritm_ol] = [document.getElementById("tech-li"), document.getElementById("algorithm-li")];
        tech_ol.innerHTML = ""
        algoritm_ol.innerHTML = ""
        create_li(data[choice][indx]["tech"], tech_ol);
        create_li(data[choice][indx]["algorithm"], algoritm_ol);
        $(".header2 .detail-project h3").html(data[choice][indx]["title"]);
        $(".header2 .detail-project .description p").html(data[choice][indx]["description"]);
        if (choice === "DG") {
            data[choice][indx]["link"].map((item) => {
                str_img += `<div class='img1'><img src=${item}></div>`;
            });
            document.getElementById("description-image").innerHTML = str_img;

            // IF ONE OF IMG DETAIL PROJECT CLICKED
            $(".header2 .detail-project .description .description-image .img1 img").click(function () {
                console.log("ok");
                $(".showimage").css({
                    "visibility": "visible",
                    "opacity": "1"
                });
                $(".showimage img").attr("src", $(this).attr("src"))
            });
            $(".showimage i").click(() => {
                $(".showimage").css({
                    "visibility": "hidden",
                    "opacity": "0"
                });
            })
        } else {
            document.getElementById("description-image").innerHTML = create_element(data[choice][indx]["link"]);
        }
    });
});

const create_iframe = (element, link) => {
    let iframe = document.createElement('iframe');
    iframe.setAttribute("src", link)
    element.appendChild(iframe)
};
const create_img = (element, link) => {
    let img = document.createElement('img');
    img.src = link;
    element.appendChild(img)
};

const create_li = (text, el) => {
    if (text) {
        text.map((item => {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(item));
            el.appendChild(li)
        }))
    }
}

const remove_element = () => {
    if (document.querySelectorAll(".header2 .projects .video img").length) {
        $(".header2 .projects .video img").remove();
    } else if (document.querySelectorAll(".header2 .projects .video iframe").length) {
        $(".header2 .projects .video iframe").remove();
    }
};

const get_data = () => {
    return fetch("./data_complete.json")
        .then(res => res.json())
        .then(res => res);
};

const create_element = (element) => {
    return `<div class='img1'>
                <iframe src=${element}>
                </iframe>
            </div>`
}