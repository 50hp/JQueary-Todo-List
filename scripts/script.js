$(onReady)

//on ready calls that ever is in this function.
function onReady() {
    console.log('Hello World');

        //calls handleSubmit on submitBtn click.
        $('#submitBtn').on('click',handleSubmit);
        $('#listArea').on('click', '.listItem', removeItem);
}


function handleSubmit(event) {

        //use the event arg to stop default page reload.
        event.preventDefault();
        let inputOne;
        let inputTwo;
        //grab val from the inputs

       inputOne = $('#inputOne').val();
       inputTwo = $('#inputTwo').val();
       console.log(inputOne, inputTwo);

        $('#listArea').append(`
        <li class="listItem">
            <button class="todoBtn">🚫</button>
            ${inputOne} ${inputTwo}
        </li>
        `);

        $('#inputOne').val('');
        $('#inputTwo').val('');

        countValue();



}

function removeItem(){
        $(this).remove();
        countValue();



}
function countValue(){
    $('#countValue').empty();
    $('#countValue').append($('.listItem').length);
}


