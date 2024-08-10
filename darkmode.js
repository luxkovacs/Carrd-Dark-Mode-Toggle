document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOMContentLoaded event fired"); // Check if this event fires

    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body; 
    console.log('Toggle button: ', toggleButton);  // Check if it's found
    console.log('Body element: ', body);         // Check if body is found
    
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
  
    // Function to toggle dark mode
    function toggleDarkMode() {
      body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
      updateToggleButton();
    }
  
    // Update the toggle button appearance
    function updateToggleButton() {
      if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌖'; // Light mode emoji 
      } else {
        toggleButton.textContent = '🌒'; // Dark mode emoji
      }
    }
  
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