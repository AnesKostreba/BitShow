var url = 'https://api.tvmaze.com/shows';
var input = $('input');
var cardHolder = $('.cardHolder');
var appendInfo = $('.info');

$.ajax({
    url: `${url}`,
    method: "GET",
}).done(function (response) {
    // cardHolder.html("");
    response.forEach(function (item) {
        if (item.id >= 1 && item.id <= 50) {
            var e = $(`
                    <div class="col-4 mt-5"><div class="card" style="width:20rem">
                    <img class="card-img-top" src="${item.image.medium}">
                    <a href="../info.html" id=${item.id} class="btn"  style="color:blue">${item.name}</a>
                    </div>
                    </div>
                    `);
        }
        cardHolder.append(e);
    })
    console.log(response);
});

$(document).on('click', 'a', function () {
    var id = $(this).attr('id');
    localStorage.setItem('id', id);
    location.replace('info.html');
})
