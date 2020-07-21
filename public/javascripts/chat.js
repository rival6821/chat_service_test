var socket = io.connect("http://localhost:3000");
socket.on("chat message", function (data) {
  console.log(data);
  var li = document.createElement("LI");
  li.textContent = data;
  document.getElementById("boxList").appendChild(li);
});
function chatMessage() {
  var $textInput = document.getElementById("textInput");
  socket.emit("chat message", $textInput.value);
  textInput.value = "";
}
