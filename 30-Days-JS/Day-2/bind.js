let user1 = {
  firstName: 'varun',
  lastName: 'naik',
};

let user2 = {
  firstName: 'nishal',
  lastName: 'raj',
};

function logDetails(age) {
  return `My name is ${this.firstName} ${this.lastName} and age is ${age}`;
}

let log = logDetails.bind(user1);
console.log(log(24));
console.log(log(45));

//important interview question based on bind
let checkPassword = function (success, failed) {
  let userName = 'varun';
  if (userName == 'kiran') {
    success();
  } else {
    failed();
  }
};

let user = {
  name: 'varun',
  login: function () {
    console.log(`${this.name} logged in successfull`);
  },
  failed: function () {
    console.log(`${this.name} failed to login`);
  },
};

checkPassword(user.login.bind(user), user.failed.bind(user));

//random checking

let logUser = function (success, fail) {
  let name = 'varun';
  if (name == 'varun') success();
  else {
    fail();
  }
};
let randomUser = {
  name: 'varun',
  login(result) {
    console.log(this.name);
    console.log(result ? 'user Logged in' : 'user logged out');
  },
};

logUser(
  randomUser.login.bind(randomUser, true),
  randomUser.login.bind(randomUser, false)
);

// example for bind in js

let user3 = {
  name: 'chiranth',
  login() {
    console.log(`${this.name} logged in successfully`);
  },
  logout() {
    console.log(`${this.name} logged out  successfully`);
  },
};

let user4 = {
  name: 'mamu',
};

// user3.login.bind(user4)();

let checkPass = function (ok, fail) {
  let name = 'varun';
  if (name == 'varun') {
    ok();
  } else {
    fail();
  }
};

checkPass(user3.login.bind(user3), user3.logout.bind(user3));
