// Handle errors on form submission
    // Prevent default behaviour of form submission
    // Check that user has entered a NAME
    // Check that user has entered an EMAIL
    // Check that use has entered a COMMENT
    // Check that user has entered a VALID EMAIL
    
    // Locating form element from the DOM

    const blogFormElement = document.getElementById('blog-contact-form');

    // Event handler function
    blogFormElement.onsubmit = handleBlogFormSubmit;

    // Taking an event object, which is passed by the form natively in the browser
    function handleBlogFormSubmit(event) {

        let isValid = true;

        // Retrieve the NAME Element value
        const nameEl = document.getElementById("blog-form-user-name");
        if (nameEl.value === "") {
            isValid = false;
            nameEl.classList.add('invalid-form-field');
        } else {
            nameEl.classList.remove('invalid-form-field');
        }

        // Retrieve the EMAIL Element value and check if Valid
        const emailEl = document.getElementById("blog-form-user-email");
        if (emailEl.value === "") {
            isValid = false;
            emailEl.classList.add('invalid-form-field');
        } else if (!isEmailValid(emailEl.value)) {
            isValid = false;
            emailEl.classList.add('invalid-form-field');
        } else {
            emailEl.classList.remove('invalid-form-field');
        }

        // Retrieve the COMMENT Element value
        const commentEl = document.getElementById("blog-form-user-comment");
        if (commentEl.value === "") {
            isValid = false;
            commentEl.classList.add('invalid-form-field');
        } else {
            commentEl.classList.remove('invalid-form-field');
        }


        if (isValid === false) {
            event.preventDefault();
            // ^ Now form has been preventing from submitting until I tell it to

            const errorMsgEl = document.getElementById("blog-contact-form-error-summary");
            // Remove HIDDEN Class from ^ element

            errorMsgEl.classList.remove("hidden");
        }
    }


// Valid EMAIL ADDRESS Code
function isEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

