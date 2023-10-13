import "bootstrap";
import "./styles.css";

//Function for apply the excuse generator when the site is loaded.
window.onload = function() {
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

//Function for generate an excuse by selecting and combining values randomly.
function excuseGenerator() {
  let finalExcuse = "";
  let excuses = [
    [
      "My dog ",
      "My cat ",
      "My nephew ",
      "My grandma ",
      "My father in law ",
      "Your friend ",
      "My sisters' boyfriend ",
      "A colony of ants ",
      "A very furious rat ",
      "My alter ego "
    ],
    [
      "destroyed ",
      "broke ",
      "smashed ",
      "incinerated ",
      "obliterated ",
      "crushed ",
      "turned into pieces ",
      "cursed ",
      "hexed "
    ],
    [
      "my will ",
      "my 1k+ hours WoW character ",
      "my aunt's garden ",
      "my brother's birds ",
      "my bitcoin wallet ",
      "an italian restaurant ",
      "two flat earthers ",
      "my uncle's favourite chair "
    ],
    [
      "with their political ideas. Savage...",
      "with an unasked advice.",
      "because it was rainy... Terrible.",
      "........What? Yeah, that's all dude...",
      "with their superpowers... True story.",
      "by mistake... You know, sh*t happens.",
      "to preserve the world's balance... Or so they say..."
    ]
  ];
  for (let array of excuses) {
    finalExcuse += array[Math.floor(Math.random() * array.length)];
  }
  return finalExcuse;
}
