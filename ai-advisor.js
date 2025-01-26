<script>
  document.getElementById('sendMessageBtn').addEventListener('click', function() {
    const message = document.getElementById('userMessage').value;
    if (message) {
      // Display User message
      displayMessage(message, 'user');
      
      // Simulate AI response based on user input
      setTimeout(function() {
        const botResponse = generateBotResponse(message);
        displayMessage(botResponse, 'bot');
      }, 1500); // Wait 1.5 seconds before AI response

      // Clear the input field
      document.getElementById('userMessage').value = '';
    }
  });

  // Function to display the chat messages
  function displayMessage(message, sender) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Function to generate bot's response (can be replaced with actual AI logic)
  function generateBotResponse(userMessage) {
    // Simple simulated responses based on certain keywords
    if (userMessage.includes('stress') || userMessage.includes('overwhelmed')) {
      return "It sounds like you're feeling stressed. Remember to take deep breaths and focus on one task at a time.";
    } else if (userMessage.includes('tired') || userMessage.includes('fatigue')) {
      return "It's important to rest when you're tired. Consider taking a short break to recharge.";
    } else if (userMessage.includes('sad') || userMessage.includes('unhappy')) {
      return "I'm sorry you're feeling down. It's okay to feel sad sometimes. Would you like some tips on improving your mood?";
    } else {
      return "I'm here to listen. How are you feeling today?";
    }
  }

  // Audio Recording Function (for future integration)
  document.getElementById('recordAudioBtn').addEventListener('click', function() {
    // This is just a placeholder for future audio recording functionality
    alert('Audio recording feature is under development.');
  });
</script>