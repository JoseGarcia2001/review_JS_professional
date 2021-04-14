class Field {
  field: HTMLInputElement;
  errors: any[];
  constructor(field) {
    this.field = field;
    this.errors = [];
    let errorMessage = document.createElement("p");
    this.field.parentNode.insertBefore(errorMessage, this.field.nextSibling);
    this.field.addEventListener("input", () => {
      this.errors = [];
      this.validate();
      errorMessage.innerText = this.errors[0] || "";
    });
  }

  validate() {}
}

function RequiredFieldDecorator(field: Field): Field {
  let validate = field.validate;
  field.validate = function () {
    validate();
    let value = field.field.value;
    if (!value) {
      field.errors.push("Lo siento, este campo no puede estar vacío");
    }
  };
  return field;
}

function EmailFieldDecorator(field: Field): Field {
  let validate = field.validate;
  field.validate = function () {
    validate();
    let value = field.field.value;
    if (value.indexOf("@") === -1) {
      field.errors.push("Debe ser un email");
    }
  };
  return field;
}

const field = document.getElementById("field");
let fieldToValidate = new Field(field);

fieldToValidate = RequiredFieldDecorator(fieldToValidate);
fieldToValidate = EmailFieldDecorator(fieldToValidate);
