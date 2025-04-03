document.body.innerHTML = "<table><tr><td>Car</td><td>Top</td><td>Price</td></tr><tr><td>Chevrolet</td><td>120mph</td><td>$10,000</td></tr><tr><td>Pontiac</td><td>140mph</td><td>$20,000</td></tr></table>"; // Trick Evan used to quickly insert the table without needing to have a bunch of code.
const t = document.getElementsByTagName("table")[0]; // Gets the first occurance of the table element in the page.
t.style.backgroundColor = "gray"; // Sets the tables background color to gray
t.style.border = "black 2.5px solid"; // Sets the tables border to black 2.5px solid
t.setAttribute("style", (t.getAttribute("style") || "") + "border-radius: 5%;"); // A little bit complicated but it ensures that it does not overide the previous styles. This line specifically adds border-radius 5%
t.setAttribute("style", (t.getAttribute("style") || "") + "width: 500px;"); // Sets the tables width to 500px