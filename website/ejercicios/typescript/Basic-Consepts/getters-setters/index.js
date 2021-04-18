const persona = {
  name: "Jose",
  lastName: "Garcia",
  get fullName() {
    return `${this.name} ${this.lastName}`;
  },
  set fullName(value) {
    this.name = value;
  },
};

persona.fullName;
persona.fullName = "Pedro";
persona.fullName;
