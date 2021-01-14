function searchByLogin() {
  var login = document.getElementById("search_field").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var user = JSON.parse(this.responseText);
      var html = '<tr>' +
        '<th>User ID</th>' +
        '<th>User name</th>' +
        '<th>User login</th>' +
        '<th>User email</th>' +
        '<th>Delete</th>' +
        '</tr>';
      html += html + '<tr><td>' + user.id + '</td>' +
        '<td>' + user.name + '</td>' +
        '<td>' + user.login + '</td>' +
        '<td>' + user.email + '</td>' +
        '<td><button onclick="deleteUser(' + user.id + ')">Delete</button></td></tr>';
      document.getElementById("usersList").innerHTML = html;
    }
  };
  xhttp.open("GET", "http://localhost:8080/users/findByLogin?login=" + login, true);
  xhttp.send();
}

function deleteUser(userId) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", "http://localhost:8080/users/delete/" + userId, true);
  xhttp.send();
  loadUsers();
}

function createUser() {
  var userName = document.getElementById("user_name").value;
  var userLogin = document.getElementById("user_login").value;
  var userEmail = document.getElementById("user_email").value;

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:8080/users/save", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify({ name: userName, login: userLogin, email: userEmail }));

  loadUsers();
  location.reload();
}

function loadUsers() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("usersList").innerHTML = "";
      var users = JSON.parse(this.responseText);
      var html = '<tr>' +
        '<th>User ID</th>' +
        '<th>User name</th>' +
        '<th>User login</th>' +
        '<th>User email</th>' +
        '<th>Delete</th>' +
        '</tr>';
      for (var i = 0; i < users.length; i++) {
        var user = users[i];
        console.log(user);
        html += '<tr><td>' + user.id + '</td>' +
          '<td>' + user.name + '</td>' +
          '<td>' + user.login + '</td>' +
          '<td>' + user.email + '</td>' +
          '<td><button onclick="deleteUser(' + user.id + ')">Delete</button></td></tr>';
      }
      document.getElementById("usersList").innerHTML = html;
    }
  };
  xhttp.open("GET", "http://localhost:8080/users/findAll", true);
  xhttp.send();
}

loadUsers();