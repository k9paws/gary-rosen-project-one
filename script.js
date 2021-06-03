// Handle errors on form submission
    // Prevent default behaviour of form submission
    // Check that user has entered a NAME
    // Check that user has entered an EMAIL
    // Check that user has entered a VALID EMAIL
    // Check that use has entered a COMMENT
    

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
        } 
        const emailEl = document.getElementById("blog-form-user-email");
        if (emailEl.value === "") {
            isValid = false;
        } 
        const commentEl = document.getElementById("blog-form-user-comment");
        if (commentEl.value === "") {
            isValid = false;
        } 




        if (isValid === false) {
            event.preventDefault();
            // ^ Now form has been preventing from submitting until I tell it to
            console.log('form not valid');
    
        }
    }





// console.log("JS is working");