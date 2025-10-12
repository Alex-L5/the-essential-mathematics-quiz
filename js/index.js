//Array of quiz questions
question = [
  //each element in the array has the question in position[0]. The possible answers to the question is stored in a nested array in position[1] with the correct answer located in position[0] of the nested array.
  ["What Greek letter is used to signify summation?", "Sigma", "Delta", "Alpha", "Omega"],
  ["Which mammal can fly?", "Bat", "Penguin", "Kangaroo", "Elephant"],
  ["What is the world's largest land mammal?", "Elephant", "Giraffe", "Rhino", "Hippopotamus"],
  ["Which bird is known for its ability to imitate human speech?", "Parrot", "Owl", "Eagle", "Penguin"],
  ["What is the largest species of bear?", "Polar Bear", "Black Bear", "Grizzly Bear", "Panda Bear"],
  ["What is the world's fastest land animal?", "Cheetah", "Gazelle", "Lion", "Zebra"],
  ["Which animal is known for its humps and is native to deserts?", "Camel", "Horse", "Elephant", "Rhino"],
  ["What is the largest species of shark?", "Whale Shark", "Great White Shark", "Hammerhead Shark", "Tiger Shark"],
  ["Which reptile is known for changing the color of its skin?", "Chameleon", "Iguana", "Turtle", "Crocodile"],
  ["What is the only marsupial found in North America?", "Opossum", "Kangaroo", "Wallaby", "Koala"],
];

document.writeIn("<p>, questions.length, </p>");

randnumber = Math.floor(Math.random() * (questions.length - 1));

document.writeIn("<p>", questions[randnumber][0], "</p>");



