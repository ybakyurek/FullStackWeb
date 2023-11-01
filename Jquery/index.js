

$(document).keydown(function (event) {
    let a = $("h1").text();
    $("h1").text(a + event.key)
})

