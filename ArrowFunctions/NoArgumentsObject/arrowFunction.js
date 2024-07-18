const add = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};

add(1, 2, 3);
