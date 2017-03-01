var state = {
    items: [{text: "apples", checked: false}, {text: "oranges", checked: false}, {text: "milk", checked: true}, {text: "bread", checked: false}]
};

// State modification functions
var addItem = function(state, item) {
    state.items.push(item);
};

// var toggleClass = function(state, item) {
//     state.items ;
// }

var removeItem = function(state, item) {
    var position = items.indexOf(event.target);
    state.items.splice(position, 1);
};

// Render functions
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {

        var beginListItem = "";

        if (item.checked) {
            beginListItem = '<li><span class="shopping-item shopping-item__checked">';
        } else {
            beginListItem = '<li><span class="shopping-item">';
        }

        return beginListItem + item.text + '</span> <div class="shopping-item-controls"><button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>';
    });
    element.html(itemsHTML);
};

// Event listeners
$(function() { 

    renderList(state, $('.shopping-list'));

    $('#js-shopping-list-form').keydown(function(event){    
        if(event.keyCode==13){
           $('#js-shopping-list-form').trigger('click');
        }
    });


    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        addItem(state, {text: $('#shopping-list-entry').val(), checked: false});
        renderList(state, $('.shopping-list'));
    });

    // $('.shopping-item-toggle').click(function(event) {
    //     toggleClass(state, );
    // });

    $('.shopping-item-delete').submit(function(event) {
        event.preventDefault;
        removeItem(state, item);
    })

});