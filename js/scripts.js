var cart = [];

function displayCart() {
    var cartDiv = $('#cartDiv');
    cartDiv.html("");
    var grandTotal = 0;
    for (var item in cart) {
        var name = cart[item].name;
        var qty = cart[item].qty;
        var price = cart[item].price;
        var subtotal = qty * price;
        grandTotal += subtotal;
        cartDiv.append('<p>' + qty + " " + name + ': ' +
        '= $' + subtotal.toFixed(2) + '</p>');
    }
    cartDiv.append('<p>Grand Total: $' + grandTotal.toFixed(2) + '</p>');
}

$(document).ready(function () {
    //Add to Cart button to send item to shopping cart
    $('div[data-product]').each(function () {
        $(this).append('<button class="btnCart">Add to Cart</button>');
    })

    $('.btnCart').on("click", function (event) {
        var pid = $(this).parent().data("product");
        var object = new Object();
        if (cart[pid]) {
            cart[pid].qty += 1;
        } else {
            cart[pid] = new Object();
            cart[pid].pid = pid;
            cart[pid].qty = 1;
            cart[pid].name = $(this).siblings("span").data("name");
            cart[pid].price = $(this).siblings("span").next().data("price");
        }
        displayCart();
    })

    $('#buy').on("click", function (event) {
        window.location.href='#order';
        var buyUrl = "";
        for (var item in cart) {
            buyUrl += "&pid[]=" + item + "&qty[]=" + cart[item].qty;
        }
        $.getJSON('buy.php?' + buyUrl, function (data) {
            $("#buyDiv").append(data);
        })
        $('#buy').parent().hide();
    })

    $('#saveOrder').on("click", function (event) {
        var cartStr = "[";
        for (var item in cart) {
            cartStr += JSON.stringify(cart[item]) + ",";
        }
        cartStr = cartStr.slice(0, -1);
        cartStr += "]";
        console.log(cartStr);
        localStorage['cart'] = cartStr;
    })

    $('#loadOrder').on("click", function () {
        cart = [];
        var obj = JSON.parse(localStorage['cart']);
        for (var item in obj) {
            pid = obj[item].pid;
            cart[pid] = obj[item];
        }
        displayCart();
    })

    navigator.geolocation.getCurrentPosition(function (pos) {
        var lat = pos.coords.latitude;
        var lng = pos.coords.longitude;
        $("#lat").text(lat);
        $("#lng").text(lng);
        var url = '<a href="http://maps.google.com/maps?q=' + lat + ',' + lng + '">Your Location</a>';

        $("#url").html(url);

        var daddr = "Cosmic+Pizza,+1231+E+Mission+Ave,+Spokane,+WA+99207";
        var saddr = lat + ',' + lng
        var urlDirection = '<a href="http://maps.google.com/maps?daddr=' + daddr + '&saddr=' + saddr + '">Your Location</a>';
        $("#urldir").html(urlDirection);


        var map = '<iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d5373.299608181256!2d-117.39581671021448!3d47.67179913209914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!1i0!3e6!4m0!4m5!1s0x549e18c10c8f7e55%3A0x929b9e2961c0cb4!2s1231+E+Mission+Ave%2C+Spokane%2C+WA+99202!3m2!1d47.671791999999996!2d-117.3912033!5e0!3m2!1sen!2sus!4v1416792797753" width="600" height="450" frameborder="0" style="border:0"></iframe>';
        var dir_map = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m8!1m3!1d5367.486435213565!2d-117.3523806!3d47.7282327!3m2!1i1024!2i768!4f13.1!4m12!1i0!3e6!4m3!3m2!1d47.728427599999996!2d-117.35238059999999!4m5!1s0x549e18c10c8f7e55%3A0x929b9e2961c0cb4!2s1231+E+Mission+Ave%2C+Spokane%2C+WA+99202!3m2!1d47.671791999999996!2d-117.3912033!5e0!3m2!1sen!2sus!4v1416791861501" width="600" height="450" frameborder="0" style="border:0"></iframe>';
        //var dir_map = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m8!1m3!1d5367.486435213565!2d-117.3523806!3d47.7282327!3m2!1i1024!2i768!4f13.1!4m12!1i0!3e6!4m3!3m2!1d' + lat + lng + '!4m5!1s0x549e18c10c8f7e55%3A0x929b9e2961c0cb4!2s1231+E+Mission+Ave%2C+Spokane%2C+WA+99202!3m2!1d47.671791999999996!2d-117.3912033!5e0!3m2!1sen!2sus!4v1416791861501" width="600" height="450" frameborder="0" style="border:0"></iframe>';
        $("#directionMap").html(map);
        $("#directions").html(dir_map);

    });

    //???????????????????????????????????????????????????

//    $(document).on("pageinit", "#location", function () {
//        initialize();
//        if (navigator.geolocation) {
//            function success(pos) {
//                $("#from").val(pos.coords.latitude + "," + pos.coords.longitude);
//                calculateRoute();
//            }
//            function fail(error) {
//                $("#from").val("Spokane, WA");
//                alert("Couldn't get your location. Are your location services enabled?");
//                calculateRoute();
//            }
//            navigator.geolocation.getCurrentPosition(success, fail, {
//                maximumAge: 500000,
//                enableHighAccuracy: true,
//                timeout: 6000
//            });
//        }
//    });
//    $(document).on('click', '#map_submit', function (e) {
//        e.preventDefault();
//        calculateRoute();
//    });
//    //var directionDisplay,
//    //    directionsService = new google.maps.DirectionsService(),
//    //    map;
//    function initialize() {
//        directionsDisplay = new google.maps.DirectionsRenderer();
//        var mapCenter = new google.maps.LatLng(47.671792,-117.3912033);
//        var myOptions = {
//            zoom: 10,
//            mapTypeId: google.maps.MapTypeId.ROADMAP,
//            center: mapCenter
//        }
//        map = new google.maps.Map(document.getElementById("directionMap"), myOptions);
//        directionsDisplay.setMap(map);
//        directionsDisplay.setPanel(document.getElementById("directions"));
//    }
//    function calculateRoute() {
//        var selectedMode = $("#mode").val(),
//            start = $("#from").val(),
//            end = "1231 E Mission Ave Spokane, WA 99321";
//        //$("#to").val("some address here");
//        if (start == '' || end == '') {
//// cannot calculate route
//            $("#results").hide();
//            alert("No good!");
//            return;
//        }
//        else {
//            var request = {
//                origin: start,
//                destination: end,
//                travelMode: google.maps.DirectionsTravelMode[selectedMode]
//            };
//            directionsService.route(request, function (response, status) {
//                if (status == google.maps.DirectionsStatus.OK) {
//                    directionsDisplay.setDirections(response);
//                    $("#results").show();
//                }
//                else {
//                    $("#results").hide();
//                }
//            });
//        }
//    }


});
