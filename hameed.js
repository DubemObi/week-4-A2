/*
Hameed is a Yoruba boy Living in Abuja, he is a student of Nile University studying Computer Science, He has two friends John and James, they are also students of Nile University. Hameed wants to apply to Seamfix as a Program manager, so he need to send his credentials. also he wants to create a domiciliary account with Zenith Bank, Model Hameed using OOP, and outline the principle of OOP you applied at any point.
*/

class Boy {
  constructor(name, tribe, location, school, course, friends) {
    this.name = name;
    this.tribe = tribe;
    this.location = location;
    this.school = school;
    this.course = course;
    this.friends = friends;
  }
  getDetails() {
    return `${this.name} is a ${this.tribe} boy Living in ${this.location}, he is a student of ${this.school} studying ${this.course}, He has a two friends ${this.friends}`;
  }
  jobApplication() {
    return (
      this.name +
      " has submitted his Application to Seamfix for the position of Program Manager"
    );
  }

  createBankAccount() {
    return "Domiciliary Bank account has been successfully been created at Zenith Bank";
  }
}

let Hameed = new Boy(
  "Hameed",
  "yoruba",
  "Abuja",
  "Nile University",
  "Computer Science",
  ["John", "James"]
);
console.log(Hameed.jobApplication());
