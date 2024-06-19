window.addEventListener('storage', function(event) {
  if (event.key === 'tasks') {
      updateCount();
  }
});

function addQue() {
  let newElement = document.getElementById('myInput').value;
  if (newElement === '') {
      alert("Type text please!");
  } else {
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(newElement);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      const listItem = document.createElement('li');
      const doneButton = document.createElement('span');
      doneButton.textContent = "✓";
      doneButton.addEventListener('click', function() {
          this.parentElement.remove();
          updateCount();
          const tasks = JSON.parse(localStorage.getItem('tasks'));
          const taskIndex = tasks.indexOf(this.parentElement.textContent);
          tasks.splice(taskIndex, 1);
          localStorage.setItem('tasks', JSON.stringify(tasks))
          document.getElementById('doneList').appendChild(this.parentElement);
          this.remove();
          removeButton.remove();
      });

      const removeButton = document.createElement('span');
      removeButton.textContent = "\u{1F5D1}";
      removeButton.addEventListener('click', function() {
          this.parentElement.remove();
          updateCount();
          const tasks = JSON.parse(localStorage.getItem('tasks'));
          const taskIndex = tasks.indexOf(this.parentElement.textContent);
          tasks.splice(taskIndex, 1);
          localStorage.setItem('tasks', JSON.stringify(tasks));
      });
      
      listItem.textContent = newElement;
      listItem.appendChild(doneButton);
      listItem.appendChild(removeButton);
      document.getElementById('myUL').appendChild(listItem);
      updateCount();
  }
}

function updateCount() {
  const listItems = document.getElementById('myUL').getElementsByTagName('li');
  document.getElementById('count').textContent = "Tasks to do - " + listItems.length;
  
  const doneItems = document.getElementById('doneList').getElementsByTagName('li');
  document.getElementById('doneCount').textContent = "Done - " + doneItems.length;
}

window.onload = function() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach(function(task) {
      const listItem = document.createElement('li');
      const doneButton = document.createElement('span');
      doneButton.textContent = "✓";
      doneButton.addEventListener('click', function() {
          this.parentElement.remove();
          updateCount();
          const tasks = JSON.parse(localStorage.getItem('tasks'));
          const taskIndex = tasks.indexOf(this.parentElement.textContent);
          tasks.splice(taskIndex, 1);
          localStorage.setItem('tasks', JSON.stringify(tasks))
          document.getElementById('doneList').appendChild(this.parentElement);
          this.remove();
          removeButton.remove();
      });

      const removeButton = document.createElement('span');
      removeButton.textContent = "\u{1F5D1}";
      removeButton.addEventListener('click', function() {
          this.parentElement.remove();
          updateCount();
          const tasks = JSON.parse(localStorage.getItem('tasks'));
          const taskIndex = tasks.indexOf(this.parentElement.textContent);
          tasks.splice(taskIndex, 1);
          localStorage.setItem('tasks', JSON.stringify(tasks));
      });
      
      listItem.textContent = task;
      listItem.appendChild(doneButton);
      listItem.appendChild(removeButton);
      document.getElementById('myUL').appendChild(listItem);
  });

  updateCount();
};