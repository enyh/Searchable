function GoogleSearch() {
    $("#bs").submit(function (a) {
        $("#images").html("");
        a.preventDefault();
        var userSearch = $("#user-input").val();
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: "https://www.googleapis.com/customsearch/v1",
            data: {
                key: "AIzaSyBcYnNxkHMjm48MBUaraAYQEFAirWBHxsQ",
                cx: "015390023158496264947:7oiibfwex40",
                searchType: "image",
                q: userSearch
            }
        }).done(function (data) {
            $.each(data.items, function (index, object) {
                var imageLink = object.link;
                $("#images").append("<div><img src='" + imageLink + "' /></div><br>");
            });
        });
    });
}
GoogleSearch();
