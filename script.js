var dropDown = document.querySelector('select');

function fetchRandomDogImage(){
    $.get('https://dog.ceo/api/breeds/image/random', function(data){
        var imageUrl = data.message;
        $('#dog-image').attr('src', imageUrl);
    }).fail(function(xhr, textStatus, errorThrown){
        console.log('Request Failed.');
    });
};

function fetchBreed(){
    $.get('https://dog.ceo/api/breeds/list/all', function(data){
        var keys = [];
        for(var k in data.message) keys.push(k);
        // Now I want to just show all these breeds in the drop down menu when the page loads.
        for(var i in keys){
            $('select').prepend("<option>"+ keys[i] +"</option>");
        }
    });
}

$('#get-image-button').click(fetchBreed);
$('#get-image-button').click(fetchRandomDogImage);


// Getting the value of selected item in the drop down menu

$('#next-button').click(() => {
    var breed = dropDown.options[dropDown.selectedIndex].text;
    if(breed !== 'random'){
    $.get('https://dog.ceo/api/breed/'+breed+'/images/random', function(data){
        $('#dog-image').attr('src', data.message);
    })}
});
