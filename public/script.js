// Function to handle file upload
function uploadFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    // Perform upload and scaling request
    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success scenario
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error scenario
    });
}

// Add event listener to the upload button
document.getElementById('upload-button').addEventListener('click', uploadFile);