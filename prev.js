document.addEventListener('DOMContentLoaded', function() {
    // Function to retrieve form data from sessionStorage
    function displayFormData() {
        // Retrieve form data from sessionStorage
        const formData = JSON.parse(sessionStorage.getItem('formData'));
        if (!formData) return; // Exit if no data is found

        // Populate the preview container with form data
        const previewContainer = document.getElementById('preview');
        previewContainer.innerHTML = `
            <p><strong>Name:</strong> ${formData.firstname} ${formData.lastname}</p>
<!--            <p><strong>Last Name:</strong> ${formData.lastname}</p>-->
            <p><strong>Gender:</strong> ${formData.gender}</p>
            <p><strong>Birthday:</strong> ${formData.birthday}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone Number:</strong> ${formData.phone}</p>
            <p><strong>Qualification:</strong> ${formData.qualification}</p>
            <p><strong>Started:</strong> ${formData.started}</p>
            <p><strong>Duration (Months):</strong> ${formData.duration}</p>
            <p><strong>Department:</strong> ${formData.department}</p>
        `;

        // Display uploaded image preview if available
        if (formData.image) {
            const imagePreview = document.getElementById('preview-image');
            imagePreview.src = formData.image;
            imagePreview.style.display = 'block';
        }
    }

    displayFormData();
});
