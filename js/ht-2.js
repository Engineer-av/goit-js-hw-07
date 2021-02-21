const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ingredientsRef = document.querySelector("#ingredients");
// ----------------V1-------------------
// const addIngr = (list, listRef) =>
//   list.forEach(ingr => {
//     const itemRef = document.createElement("li");
//     itemRef.textContent = ingr;
//     listRef.appendChild(itemRef);
//   });

// addIngr(ingredients, ingredientsRef);

// ----------------V2-------------------

const addItem = ingr => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingr;
  return itemRef;
};

const ingrArray = ingredients.map(ingredient => addItem(ingredient));
console.log(ingrArray);
ingredientsRef.append(...ingrArray);

/* Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
 после чего вставит все li за одну операцию в список ul.ingredients.
 Для создания DOM - узлов используй document.createElement()*/
