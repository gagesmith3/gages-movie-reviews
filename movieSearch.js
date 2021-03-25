


const button = document.getElementById('button1');
button.addEventListener('click', function() {
    var input = document.getElementById('input').value;
    
    var movies = ['Goodfellas', 'Once Upon A Time In Hollywood', 'Spotlight', 'Uncut Gems', 'The Departed', 'Django Unchained', 'Casino Royale', 'Inglorious Bastards', 'The Godfather', 'Disneys "Hercules"'];


    var rank = input;
    rank = rank - 1;
    
    movie = movies[rank];
    if (input > 0 && input < 11) {
  alert('The rank you selected was #' + input + '. That movie is ' + movie + '.');
    }
    else
    alert('Please select a rank 1-10')

    document.getElementById('input').value = ''; 
});