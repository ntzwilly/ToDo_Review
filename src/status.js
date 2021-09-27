export default function elementGenerator(typeName, className, content, idName) {
  const element = document.createElement(typeName);
  if (className) {
    element.className = className;
  }
  if (content) {
    element.textContent = content;
  }
  if (idName) {
    element.id = idName;
  }
  return element;
}

export function statusUpdate(item, input, oneTodo, todoTasks) {
  if (item.checked) {
    input.classList.add('line-through');
  } else {
    input.classList.remove('line-through');
  }

  oneTodo.addEventListener('change', () => {
    const todo = todoTasks[item.id];
    todo.checked = !item.checked;
    todo.completed = !item.completed;
  });
}
