$(document).ready(function () {
    var id = localStorage.getItem('id');
    $.ajax({
        url: 'https://api.tvmaze.com/shows/' + id,
        method: 'get',
        data: {
            embed: ['seasons', 'cast']
        }
    }).done(function (item) {
        var img = $('.showImage');
        img.attr('src', item.image.original);

        var seasoneNumber = item._embedded.seasons.length;

        var lista = $('<ul>');

        item._embedded.seasons.forEach(element => {
            var listItem = $("<li>");

            listItem.text(element.premiereDate + " " + element.endDate);

            console.log(element);
            lista.append(listItem);
        });

        var cast = $("<ul>");

        item._embedded.cast.forEach(element => {
            var listCast = $("<li>");
            //    listItem.text(element.cast);
            listCast.text(element.character.name);

            cast.append(listCast);
        });


        $('.cast').append(cast);
        $('.seasons').append(lista);
    })
})