//BLOG-COMMENT FORM CODE
function blogPage() {

  // Handle errors on form submission
  // Prevent default behaviour of form submission
  // Check that user has entered a NAME
  // Check that user has entered an EMAIL
  // Check that use has entered a COMMENT
  // Check that user has entered a VALID EMAIL

  // Locating form element from the DOM

  const blogFormElement = document.getElementById("blog-comment-form");

  // Event handler function
  blogFormElement.onsubmit = handleBlogFormSubmit;

  // Taking an event object, which is passed by the form natively in the browser
  function handleBlogFormSubmit(event) {
    let isValid = true;

    let errorSummaryMsg = [];

    // Retrieve the NAME Element value
    const nameEl = document.getElementById("blog-form-user-name");
    if (nameEl.value === "") {
      isValid = false;
      nameEl.classList.add("invalid-form-field");
      errorSummaryMsg.push("Name is Invalid");
    } else {
      nameEl.classList.remove("invalid-form-field");
    }

    // Retrieve the EMAIL Element value and check if Valid
    const emailEl = document.getElementById("blog-form-user-email");
    if (emailEl.value === "") {
      isValid = false;
      emailEl.classList.add("invalid-form-field");
      errorSummaryMsg.push("An Email is Required");
    } else if (!isEmailValid(emailEl.value)) {
      isValid = false;
      emailEl.classList.add("invalid-form-field");
      errorSummaryMsg.push("Please Enter a VALID Email Address");
    } else {
      emailEl.classList.remove("invalid-form-field");
    }

    // Retrieve the COMMENT Element value
    const commentEl = document.getElementById("blog-form-user-comment");
    if (commentEl.value === "") {
      isValid = false;
      commentEl.classList.add("invalid-form-field");
      errorSummaryMsg.push("Please Enter a Comment");
    } else {
      commentEl.classList.remove("invalid-form-field");
    }

    if (isValid === false) {
      event.preventDefault();
      // ^ Now form has been preventing from submitting until I tell it to

      const errorMsgEl = document.getElementById(
        "blog-contact-form-error-summary"
      );
      // Remove HIDDEN Class from ^ element

      errorMsgEl.classList.remove("hidden");
      errorMsgEl.innerHTML = errorSummaryMsg.join(" <br> ");
    } else {
      event.preventDefault();
      window.location = "submission-page.html";
    }
  }

  // Valid EMAIL ADDRESS Code taken from "https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript"
  function isEmailValid(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}






//CONTACT-PAGE FORM CODE
function contactPage() {

  // Handle errors on form submission
  // Prevent default behaviour of form submission
  // Check that user has entered a NAME
  // Check that user has entered an EMAIL
  // Check that use has entered a COMMENT
  // Check that user has entered a VALID EMAIL

  // Locating form element from the DOM

  const contactFormElement = document.getElementById("contact-form");

  // Event handler function
  contactFormElement.onsubmit = handleContactFormSubmit;

  // Taking an event object, which is passed by the form natively in the browser
  function handleContactFormSubmit(event1) {
    let isValid = true;

    let contactErrorSummaryMsg = [];

    // Retrieve the NAME Element value
    const contactNameEl = document.getElementById("contact-form-user-name");
    if (contactNameEl.value === "") {
      isValid = false;
      contactNameEl.classList.add("invalid-form-field");
      contactErrorSummaryMsg.push("Name is Invalid");
    } else {
      contactNameEl.classList.remove("invalid-form-field");
    }

    // Retrieve the EMAIL Element value and check if Valid
    const contactEmailEl = document.getElementById("contact-form-user-email");
    if (contactEmailEl.value === "") {
      isValid = false;
      contactEmailEl.classList.add("invalid-form-field");
      contactErrorSummaryMsg.push("An Email is Required");
    } else if (!isEmailValid(contactEmailEl.value)) {
      isValid = false;
      contactEmailEl.classList.add("invalid-form-field");
      contactErrorSummaryMsg.push("Please Enter a VALID Email Address");
    } else {
      contactEmailEl.classList.remove("invalid-form-field");
    }

    // Retrieve the COMMENT Element value
    const contactCommentEl = document.getElementById("contact-form-user-comment");
    if (contactCommentEl.value === "") {
      isValid = false;
      contactCommentEl.classList.add("invalid-form-field");
      contactErrorSummaryMsg.push("Please Enter a Comment");
    } else {
      contactCommentEl.classList.remove("invalid-form-field");
    }

    if (isValid === false) {
      event1.preventDefault();
      // ^ Now form has been preventing from submitting until I tell it to

      const contactErrorMsgEl = document.getElementById(
        "contact-form-error-summary"
      );
      // Remove HIDDEN Class from ^ element

      contactErrorMsgEl.classList.remove("hidden");
      contactErrorMsgEl.innerHTML = contactErrorSummaryMsg.join(" <br> ");
    } else {
      event1.preventDefault();
      window.location = "submission-page.html";
    }
  }

  // Valid EMAIL ADDRESS Code taken from "https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript"
  function isEmailValid(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
