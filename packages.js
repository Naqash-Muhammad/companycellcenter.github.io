// use company
$(document).ready(function () {
    $("#company").mouseover(function () {
        $("#displaye1").css({ "display": "block" })
        $("#displaye2, #displaye3, #displaye4, #small-box, #fan, #explore").css({ "display": "none", })
        $("#backgroundpic, #cursertopdown").css({ "top": "27rem" })
        $("#cursertopdown").css({ "top": "53rem" })
    }),

        $("#company1").mouseleave(function () {
            $("#displaye1").css({ "display": "none" })
            $("#explore").css({ "display": "block" })
            $("#cursertopdown").css({ "top": "22rem" })
        })
})


//use offers

$(document).ready(function () {
    $("#offers").mouseover(function () {
        $("#displaye2").css({ "display": "block" })
        $("#displaye1, #displaye3, #displaye4, #small-box, #fan, #explore").css({ "display": "none" })
        $("#backgroundpic, #cursertopdown").css({ "top": "27rem" })
        $("#cursertopdown").css({ "top": "53rem" })
    }),

        $("#internettv").mouseleave(function () {
            $("#displaye2").css({ "display": "none" })
            $("#explore").css({ "display": "block" })
            $("#cursertopdown").css({ "top": "22rem" })
        })
})

//use contact
$(document).ready(function () {
    $("#contact").mouseover(function () {
        $("#displaye3").css({ "display": "block", cursor: "pointer" })
        $("#displaye4,#displaye2,#displaye1, #small-box, #fan, #explore").css({ "display": "none" })
        $("#backgroundpic, #cursertopdown").css({ "top": "27rem" })
        $("#cursertopdown").css({ "top": "53rem" })
    }),

        $("#contactdisplay").mouseleave(function () {
            $("#displaye3").css({ "display": "none" })
            $("#explore").css({ "display": "block" })
            $("#cursertopdown").css({ "top": "22rem" })
        })
})

//use complain
$(document).ready(function () {
    $("#complain").mouseover(function () {
        $("#displaye4").css({ "display": "block" })
        $("#displaye3,#displaye2,#displaye1, #small-box, #fan, #explore").css({ "display": "none" })
        $("#backgroundpic, #cursertopdown").css({ "top": "27rem" })
        $("#cursertopdown").css({ "top": "53rem" })
    }),

        $("#complaindisplay").mouseleave(function () {
            $("#displaye4").css({ "display": "none" })
            $("#explore").css({ "display": "block" })
            $("#cursertopdown").css({ "top": "22rem" })
        })
})






////////////////// start small box



$(document).ready(function () {
    $("#box").mouseover(function () {
        $("#fan").css({ display: "block" });
        $("#complaindisplay, #explore").css({ display: "none" });
        $("#small-box").css({ display: "block" });
        var div = $("#animat");
        div.animate({ height: '51.7rem', opacity: '0.4' }, "slow");
        div.animate({ width: '100%', opacity: '0.8' }, "slow");
        $("#backgroundpic, #cursertopdown").css({ "top": "27rem" })
        $("#cursertopdown").css({ "top": "53rem" })
    });

    $("#box").mouseleave(function () {
        $("#explore").css({ "display": "block" })
        $("#cursertopdown").css({ "top": "22rem" })
    });

    $("#fan").click(function () {
        var div = $("#animat");
        $("#fan").css({ display: "none" });
        $("#small-box").css({ display: "none" });
        div.animate({ width: '100px', opacity: '0.8' }, "slow");
        $("#fan").css({ display: "none" });
        div.animate({ height: '0px', opacity: '0.4' }, "slow");
    });
});




//start direct tv

$(document).ready(function () {
    $("#directID").click(function () {
        $("#directVshowcol12").css({ width: "100%" });
        $("#box21").css({ display: "block" });
        $("#directID").css({ display: "none" });
        $("#tabledirectV").css({ display: "block" });
        $("#tablespectrum, #tableoptimum, #tablecox").css({ display: "none" });
        $("#fan").css({ display: "none" });
        $("#spectrumID, #optimumID, #coxID").css({ display: "none" });
    });

    $("#directID").mouseover(function () {
        $("#servicesDIrectV").css({ display: "block" });
        $("#servicesDIrectV").slideDown("slow");
        $("#directID").css({ cursor: "pointer" });
        $("#directID").css({ backgroundColor: "rgba(219, 166, 18, 0.719)", padding: "1rem", borderRadius: "1rem" });
    });
    $("#directID").mouseleave(function () {
        $("#servicesDIrectV").css({ display: "none" });
        $("#directID").css({ cursor: "pointer" });
        $("#directID").css({ backgroundColor: "", padding: "" });
    });



    $("#closeDIRECTV").click(function () {
        $("#tabledirectV").css({ display: "none" });
        $("#fan").css({ display: "block" });
        $("#directID, #spectrumID, #optimumID, #coxID").css({ display: "block" });
    });
});
//end direct tv



//start spectrum tv

$(document).ready(function () {
    $("#spectrumID").click(function () {
        $("#directVshowcol12").css({ width: "100%" });
        $("#box21").css({ display: "block" });
        $("#spectrumID").css({ display: "none" });
        $("#tablespectrum").css({ display: "block" });
        $("#tabledirectV,#tablecox, #tableoptimum").css({ display: "none" });
        $("#fan").css({ display: "none" });
        $("#directID, #optimumID, #coxID").css({ display: "none" });
    });

    $("#spectrumID").mouseover(function () {
        $("#servicesptrum").css({ display: "block" });
        $("#servicesptrum").slideDown("slow");
        $("#spectrumID").css({ cursor: "pointer" });
        $("#spectrumID").css({ backgroundColor: "rgba(219, 166, 18, 0.719)", padding: "1rem", borderRadius: "1rem" });
    });
    $("#spectrumID").mouseleave(function () {
        $("#servicesptrum").css({ display: "none" });
        $("#spectrumID").css({ cursor: "pointer" });
        $("#spectrumID").css({ backgroundColor: "", padding: "" });
    });



    $("#closespectrum").click(function () {
        $("#tablespectrum").css({ display: "none" });
        $("#fan").css({ display: "block" });
        $("#directID, #coxID, #spectrumID, #optimumID").css({ display: "block" });
    });
});
//end spectrum tv




//start optimum tv

$(document).ready(function () {
    $("#optimumID").click(function () {
        $("#directVshowcol12").css({ width: "100%" });
        $("#box21").css({ display: "block" });
        $("#optimumID").css({ display: "none" });
        $("#tableoptimum").css({ display: "block" });
        $("#fan").css({ display: "none" });
        $("#directID, #spectrumID, #coxID").css({ display: "none" });
        $("#tabledirectV,#tablecox, #tablespectrum").css({ display: "none" });
    });

    $("#optimumID").mouseover(function () {
        $("#serviceoptimum").css({ display: "block" });
        $("#serviceoptimum").slideDown("slow");
        $("#optimumID").css({ cursor: "pointer" });
        $("#optimumID").css({ backgroundColor: "rgba(219, 166, 18, 0.719)", padding: "1rem", borderRadius: "1rem" });
    });
    $("#optimumID").mouseleave(function () {
        $("#serviceoptimum").css({ display: "none" });
        $("#optimumID").css({ cursor: "pointer" });
        $("#optimumID").css({ backgroundColor: "", padding: "" });
    });



    $("#closeoptimum").click(function () {
        $("#tableoptimum").css({ display: "none" });
        $("#fan").css({ display: "block" });
        $("#directID, #coxID, #spectrumID, #optimumID").css({ display: "block" });
    });

});
//end optimum tv




//start cox tv

$(document).ready(function () {
    $("#coxID").click(function () {
        $("#directVshowcol12").css({ width: "100%" });
        $("#box21").css({ display: "block" });
        $("#coxID").css({ display: "none" });
        $("#tablecox").css({ display: "block" });
        $("#fan").css({ display: "none" });
        $("#directID, #spectrumID, #optimumID").css({ display: "none" });
        $("#tabledirectV,#tableoptimum, #tablespectrum").css({ display: "none" });
    });

    $("#coxID").mouseover(function () {
        $("#servicecox").css({ display: "block" });
        $("#servicecox").slideDown("slow");
        $("#coxID").css({ cursor: "pointer" });
        $("#coxID").css({ backgroundColor: "rgba(219, 166, 18, 0.719)", padding: "1rem", borderRadius: "1rem" });
    });
    $("#coxID").mouseleave(function () {
        $("#servicecox").css({ display: "none" });
        $("#coxID").css({ cursor: "pointer" });
        $("#coxID").css({ backgroundColor: "", padding: "" });
    });



    $("#closecox").click(function () {
        $("#tablecox").css({ display: "none" });
        $("#fan").css({ display: "block" });
        $("#directID, #coxID, #spectrumID, #optimumID").css({ display: "block" });
    });

});
//end cox tv



////////////////// end small box





//use slider
$(document).ready(function () {
    $("#LKIO9").owlCarousel({
        items: 5,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 1000,
        loop: true,
        margin: 20,
        nav: false,
        dotsData: false,
        dotsEach: false,
        dots: false,
        //  center:true
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});
