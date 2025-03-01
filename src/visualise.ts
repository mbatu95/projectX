import { initThreeJS } from './three'; // Adjust the path as necessary

// Initialize the Three.js scene
initThreeJS();

// Function to handle file upload (remains unchanged)
const handleFileUpload = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        const file = input.files[0];

        // Read the file as text
        const reader = new FileReader();
        reader.onload = (e) => {
            const contents = e.target?.result;
            if (typeof contents === 'string') {
                try {
                    // Here you can parse the JSON data if needed in the future
                    console.log('File contents:', contents);
                } catch (error) {
                    console.error('Error parsing file:', error);
                }
            }
        };

        // Read the file
        reader.readAsText(file);
    } else {
        console.error('No file selected');
    }
};

// Attach event listeners
const fileInput = document.getElementById('fileInput') as HTMLInputElement;
const uploadButton = document.getElementById('uploadButton') as HTMLButtonElement;

if (fileInput && uploadButton) {
    uploadButton.addEventListener('click', () => handleFileUpload(new Event('upload')));
    fileInput.addEventListener('change', handleFileUpload);
}
