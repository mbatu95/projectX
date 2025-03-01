import { initThreeJS } from './three'; // Adjust the path as necessary

// Function to handle file upload
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
                    // Parse JSON data
                    const jsonData = JSON.parse(contents);
                    console.log('JSON Data:', jsonData);

                    // Display the parsed JSON data
                    const outputElement = document.getElementById('output');
                    if (outputElement) {
                        // Format and display JSON
                        outputElement.textContent = JSON.stringify(jsonData, null, 2);
                    }

                    // Initialize Three.js with the parsed JSON data
                    initThreeJS(jsonData);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
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
