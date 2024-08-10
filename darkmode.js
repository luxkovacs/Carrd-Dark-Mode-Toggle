document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOMContentLoaded event fired"); // Added 

    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    console.log('Toggle button: ', toggleButton); // Added 
    console.log('Body element: ', body);        // Added 

    //  Function to toggle dark mode
    function toggleDarkMode() {
        console.log("toggleDarkMode function called"); // Added 
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
        updateToggleButton();
    }

    // Function to update the toggle button appearance
    function updateToggleButton() {
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = '🌖'; // Light mode emoji
        } else {
            toggleButton.textContent = '🌒'; // Dark mode emoji
        }
    }

    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
    }
    updateToggleButton();

    // Add event listener to the toggle button
    toggleButton.addEventListener('click', toggleDarkMode);
  
    // Function to apply dark mode based on localStorage
    function applyDarkMode() {
      if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
      updateToggleButton(); // Ensure toggle matches saved state
    }
  
    // Mutation observer to detect potential section changes 
    // (Experimental - might not be reliable)
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          applyDarkMode();
        }
      });
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  
    // Set initial mode based on localStorage & attach event listener
    applyDarkMode();
    toggleButton.addEventListener('click', toggleDarkMode); 
  });