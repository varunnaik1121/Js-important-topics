let printName = function (branch, regNo) {
  console.log(
    `My name is ${this.firstName} ${this.lastName} and I am persuing ${branch} and my reg no is ${regNo}`
  );
};

let user1 = {
  firstName: 'varun',
  lastName: 'naik',
};

let user2 = {
  firstName: 'kiran',
  lastName: 'kumar',
};

printName.call(user2, 'BCA', '1DS22BC112');
printName.call(user1, 'MCA', '1DS22MC113');
//call method is used to call the function of objects with substituting another objects
