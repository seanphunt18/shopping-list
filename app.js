var state = {
    items: [{text: "apples", checked: false}, {text: "oranges", checked: false}, {text: "milk", checked: true}, {text: "bread", checked: false}]
};

// State modification functions
var addItem = function(state, item) {
    state.items.push(item);
    // push the item to the items array
};

var toggleClass = function(state, itemText) {
    for (var i=0; i<state.items.length; i++) {
        if (state.items[i].text == itemText) {
            // if the text of the current object in state matches the text of the item with the 'shopping-item' class falling under the closest li element to the button being clicked...(see line 66)
            state.items[i].checked = !state.items[i].checked;
            //set the value of the current object in state's 'checked' key to the opposite of its current value
            break;
            // stop looping
        }
    }
}

var removeItem = function(state, itemText) {
    for (var i=0; i<state.items.length; i++) {
        if (state.items[i].text == itemText) {
            // same as above function
            state.items.splice(i, 1);
            // remove 1 object from splice, the current object in the loop
            break;
            // stop looping
        }
    }
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
    // if a key is pressed while engaged in the form with id 'js-shopping-list-form'...    
        if(event.keyCode==13){
        // if the key pressed is the return key...
           $('#js-shopping-list-form').trigger('click');
           // trigger a click event on the form
        }
    });


    $('#js-shopping-list-form').submit(function(event) {
    // if the form with id 'js-shopping-list-form' is submitted...
        event.preventDefault();
        // prevent the default element interaction from occurring
        addItem(state, {text: $('#shopping-list-entry').val(), checked: false});
        // add an object to the items array, taking what is entered in the form's text area as the value for the text key, and false as the value for the checked key
        renderList(state, $('.shopping-list'));
        // render the ul
    });

    $(document).on('click', '.shopping-item-toggle', function(event) {
    // 
        event.preventDefault();
        toggleClass(state, $(this).closest("li").find('.shopping-item').text());
        // run the toggleClass function, taking the closest <li>'s descendant with class 'shopping-item''s text as itemText
        renderList(state, $('.shopping-list'));        
        // render the ul
    });

    $(document).on('click', '.shopping-item-delete', function(event) {
        event.preventDefault;
        removeItem(state, $(this).closest("li").find('.shopping-item').text());
        // run the removeItem function, taking the closest <li>'s descendant with class 'shopping-item''s text as itemTextremoveItem
        renderList(state, $('.shopping-list'));
    });

});