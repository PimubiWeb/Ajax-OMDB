$(document).ready(function(){

    var apikey = "55e833a1"

    $('#movieForm').submit(function(event){
        event.preventDefault();

        var movie = $('#Movie').val();

        var result = ""

        var url = "http://www.omdbapi.com/?apikey="+apikey ;

        $.ajax({
            method: "POST",
            url: url+"&t="+movie,
            success: function(data){
                console.log(data);  

                result = `
                <img style="float:left" class="img-thumnail" src="${data.Poster}">
                <h2>Titulo: ${data.Title}</h2>
                <h2>Fecha: ${data.Released}</h2>
                <h2>Duración: ${data.Runtime}</h2>
                <h2>Género:${data.Genre}</h2>
                <h2>Director: ${data.Director}</h2>
                <h2>Actores: ${data.Actors}</h2>
                `;

                $("#result").html(result)
            }
        })
    })
})