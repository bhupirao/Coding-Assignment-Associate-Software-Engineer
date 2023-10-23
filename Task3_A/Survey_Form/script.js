function validateForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const option = document.querySelector('input[name="option"]:checked');
    const option2 = document.querySelector('input[name="option2"]:checked');
    const option3 = document.querySelector('input[name="option3"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (
        !firstName ||
        !lastName ||
        !dob ||
        !country ||
        !gender || // Either "Male" or "Female" is required
        !profession ||
        !option ||
        !option2 ||
        !option3 ||
        !email ||
        !mobile
    ) {
        alert("Please fill in all the required fields.");
        return false;
    }

    // Continue with form submission
    return true;
}