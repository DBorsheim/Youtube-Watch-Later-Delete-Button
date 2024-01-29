// Insert the Material Icons font into the document head
var link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Material+Icons';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Function to create a delete button
function createDeleteButton() {
  // Create a new button element
  var deleteButton = document.createElement("button"); 

  // Create a span element for the delete icon
  var deleteIcon = document.createElement('span');
  deleteIcon.textContent = 'X';
  deleteIcon.className = 'material-icons';

  // Add the icon to the button
  deleteButton.appendChild(deleteIcon);

  // Style the button
  deleteButton.style.display = 'block';
  deleteButton.style.margin = '10px auto';
  deleteButton.style.padding = '5px 10px';
  deleteButton.style.fontFamily = 'Roboto, sans-serif';  // set font to Roboto
  // make button background transparent
  deleteButton.style.backgroundColor = 'transparent';
  deleteButton.style.color = 'grey';  // set text color to white
  deleteButton.style.border = 'none';  // remove border
  // make the background a circle
  deleteButton.style.borderRadius = '50%';
  // make the button a fixed size
  deleteButton.style.width = '50px';
  deleteButton.style.height = '50px';
  deleteButton.style.cursor = 'pointer';  // add a pointer on hover
  // Animates the button on hover from 50% opacity to 100% opacity
  deleteButton.style.transition = 'opacity 0.2s ease-in-out';
  deleteButton.style.transition = 'color 0.2s ease-in-out';
  deleteButton.style.transition = 'background-color 0.2s ease-in-out';
  deleteButton.style.opacity = '1';
  deleteButton.addEventListener('mouseover', function() {
    deleteButton.style.color = '#ea4335';
    // deleteButton.style.opacity = '1';
    deleteButton.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
  });
  deleteButton.addEventListener('mouseout', function() {
    deleteButton.style.color = 'grey';
    // deleteButton.style.opacity = '0.5';
    deleteButton.style.backgroundColor = 'transparent';
  });
  

  // Add an event listener to the button so it deletes the video when clicked
  deleteButton.addEventListener("click", async function(event) {
    // Select the parent element that the button is inside of
    var item = event.currentTarget.parentElement;
    
    // Click the "Remove" button
    var item_button = item.querySelector('#button');
    item_button.click();
      
    // Sleep for 10ms to allow the video to be removed
    await new Promise(res => setTimeout(res, 10));
      
    document.querySelectorAll('.style-scope ytd-menu-service-item-renderer')[2].click();
  });
  
  return deleteButton;
}

// Select all the playlist items
var playlistItems = document.querySelectorAll('ytd-playlist-video-renderer.style-scope.ytd-playlist-video-list-renderer');

// Loop through the playlist items and append a delete button to each one
for (let i = 0; i < playlistItems.length; i++) {
  let item = playlistItems[i];
  let deleteButton = createDeleteButton();
  // Instead of appending at the end, apend to the beginning of the item
  item.insertBefore(deleteButton, item.firstChild);
}
