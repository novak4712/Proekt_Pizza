$(document).ready(function () {
    var menuitem1 = $(".menuitem1>div");
    var menuitem2 = $(".menuitem2>div");
    var menuitem3 = $(".menuitem3>div");
    var menuitem4 = $(".menuitem4>div");
    $(".imgpart1").hide();
    $(".imgpart2").hide();
    $(".imgpart3").hide();
    $(".imgpart4").hide();
    $(".orderButton").hide();
    $(".bonappetit").hide();

    $(menuitem1).click(function () {   //  первое меню (выбор ингридиент + добовление кусочка пиццы)
        $(this).toggleClass("checkMarker");
        if ((menuitem1).hasClass("checkMarker")) {
            $(".imgpart1").show("slow");
        } else if (!(menuitem1).hasClass("checkMarker")) {
            $(".imgpart1").hide("slow");
        }

    });
    $(menuitem2).click(function () { //  второе меню (выбор ингридиент + добовление кусочка пиццы)
        $(this).toggleClass("checkMarker");
        if ((menuitem2).hasClass("checkMarker")) {
            $(".imgpart2").show("slow");
        } else if (!(menuitem2).hasClass("checkMarker")) {
            $(".imgpart2").hide("slow");
        }
    });
    $(menuitem3).click(function () { //  третье меню (выбор ингридиент + добовление кусочка пиццы)
        $(this).toggleClass("checkMarker");
        if ((menuitem3).hasClass("checkMarker")) {
            $(".imgpart3").show("slow");
        } else if (!(menuitem3).hasClass("checkMarker")) {
            $(".imgpart3").hide("slow");
        }
    });
    $(menuitem4).click(function () { //  четвертое меню (выбор ингридиент + добовление кусочка пиццы)
        $(this).toggleClass("checkMarker");
        if ((menuitem4).hasClass("checkMarker")) {
            $(".imgpart4").show("slow");
        } else if (!(menuitem4).hasClass("checkMarker")) {
            $(".imgpart4").hide("slow");
        }
    });

    $("body").on("click", function () { //  появление кнопки заказать
        var countmenuitem1 = $(".menuitem1").find(".checkMarker").length;
        var countmenuitem2 = $(".menuitem2").find(".checkMarker").length;
        var countmenuitem3 = $(".menuitem3").find(".checkMarker").length;
        var countmenuitem4 = $(".menuitem4").find(".checkMarker").length;
        if ((countmenuitem1 > 0) & (countmenuitem2 > 0) & (countmenuitem3 > 0) & (countmenuitem4 > 0)) {
            $(".orderButton").show("slow");
        } else {
            $(".orderButton").hide("slow");
        }
    });
    $(".itemfocus").click(function () {   //  подсчет цены + набор состава пиццы

		var items = $(".itemfocus");
		var price = 0;
        var sostav = "";
		items.each(function () {
		    if($(this).hasClass("checkMarker")) {
		        price += parseInt($(this).attr("data-price"));
			}

		});
		$(".price").text(price + " руб.");

		items.each(function () {
			if($(this).hasClass("checkMarker")) {
				sostav += $(this).attr("data-text");
			}
		});
		$(".sostav").text(sostav);
    });
    $(".orderButton").click(function () {  //  приятного аппетита
        $(".bonappetit").show("2000");

    });
    $(".bonappetit").click(function () { //  обновление страницы
        location.reload();
    });
});

