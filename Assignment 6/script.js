console.log("JavaScript is running!");

function formatNames(arr) {
return arr
    .map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(", ");
}
console.log(formatNames(["alice", "bob", "charlie"]));

//document.getElementById("output").textContent = formatNames(["alice", "bob", "charlie"]);
// Output: "Alice, Bob, Charlie"