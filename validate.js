function validateForm() {
  const Name =
      document.getElementById("Name").value;
  const Mobile =
      document.getElementById("Mobile").value;
  const Address =
      document.getElementById("Address").value;
  const Email =
      document.getElementById("Email").value;
  const Password =
      document.getElementById("Password").value;
  const Cpassword =
      document.getElementById("Cpassword").checked;

  const NameameError =document.getElementById("Name-error");
  const MobileError = document.getElementById("Mobile-error");
  const AddressError = document.getElementById("Address-error");
  const EmailError = document.getElementById("Email-error");
  const PasswordError = document.getElementById("Password-error");
  const CpasswordError = document.getElementById("Cpassword-error");

  NameError.textContent = "";
  MobileError.textContent = "";
  AddressError.textContent = "";
  EmailError.textContent = "";
  PasswordError.textContent = "";
  Cpassword.textContent = "";

  let isValid = true;

  if (Name === "" || /\d/.test(Name)) {
      nameError.textContent =
          "Please enter your name properly.";
      isValid = false;
  }

  if (Address === "") {
      AddressError.textContent =
          "Please enter your address.";
      isValid = false;
  }

  if (Email === "" || !Email.includes("@")) {
      EmailError.textContent =
          "Please enter a valid email address.";
      isValid = false;
  }

  if (password === "" || password.length < 6) {
      passwordError.textContent =
          "Please enter a password with at least 6 characters.";
      isValid = false;
  }

  
}











