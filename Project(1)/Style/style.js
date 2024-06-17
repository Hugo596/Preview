function addQue() {
  let newElement = document.getElementById('myInput').value;
  if (newElement === '') {
    alert("type text pls!");
  } else {
    var listItem = document.createElement('li');
    var doneButton = document.createElement('span');
    doneButton.textContent = "✓";
    doneButton.addEventListener('click', function() {
      this.parentElement.remove();
      document.getElementById('doneList').appendChild(this.parentElement);
      updateCount();
      this.remove();
      removeButton.remove();
    });
      var removeButton = document.createElement('span');
      removeButton.textContent = "\u{1F5D1}";
      removeButton.addEventListener('click', function() {
        this.parentElement.remove();
        updateCount();
    });

    listItem.textContent = newElement;
    listItem.appendChild(doneButton);
    listItem.appendChild(removeButton);
    document.getElementById('myUL').appendChild(listItem);
    updateCount();
    closeInputDialog();
  }
}

function updateCount() {
  var listItems = document.getElementById('myUL').getElementsByTagName('li');
  document.getElementById('count').textContent = "Tasks to do - " + listItems.length;

  var doneItems = document.getElementById('doneList').getElementsByTagName('li');
  document.getElementById('doneCount').textContent = "Done - " + doneItems.length;
}