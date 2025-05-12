// Startup Miracle Branded n8n Chat Widget
// Chat Widget Script for Startup Miracle client Not Just Carpet
(function () {
  const styles = `
    .n8n-chat-widget {
      --chat--color-primary: #854fff;
      --chat--color-secondary: #6b3fd4;
      --chat--color-background: #ffffff;
      --chat--color-font: #333333;
      font-family: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .n8n-chat-widget .chat-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
      display: none;
      width: 100%;
      max-width: 380px;
      height: 600px;
      background: var(--chat--color-background);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(133, 79, 255, 0.15);
      border: 1px solid rgba(133, 79, 255, 0.2);
      overflow: hidden;
    }

    @media (max-width: 480px) {
      .n8n-chat-widget .chat-container {
        width: 95%;
        height: 80vh;
        right: 2.5%;
        bottom: 10px;
      }
    }

    .n8n-chat-widget .chat-toggle {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border-radius: 30px;
      background: linear-gradient(135deg, var(--chat--color-primary), var(--chat--color-secondary));
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(133, 79, 255, 0.3);
      z-index: 999;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .n8n-chat-widget .chat-toggle:hover {
      transform: scale(1.05);
    }

    .n8n-chat-widget .brand-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .n8n-chat-widget .brand-header img {
      width: 32px;
      height: 32px;
    }

    .n8n-chat-widget .chat-input textarea {
      width: 100%;
      padding: 12px;
      font-size: 16px;
      border-radius: 8px;
      border: 1px solid rgba(133, 79, 255, 0.2);
      resize: none;
    }

    .n8n-chat-widget .chat-footer {
      text-align: center;
      font-size: 12px;
      opacity: 0.8;
      padding: 8px;
    }

    .n8n-chat-widget .chat-footer a {
      text-decoration: none;
      color: var(--chat--color-primary);
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.innerText = styles;
  document.head.appendChild(styleEl);

  const widget = document.createElement('div');
  widget.className = 'n8n-chat-widget';
  widget.innerHTML = `
    <div class="chat-container" id="n8n-chat-box">
      <div class="brand-header">
        <img src="https://static.wixstatic.com/media/19f18c_47e83b251f5145efbb950a06e50afa9d~mv2.png" alt="Not Just Carpet Logo" />
        <strong>Not Just Carpet</strong>
      </div>
      <iframe 
        src="https://n8n.srv821024.hstgr.cloud/webhook/46ea0fc1-9d73-4c5a-9aa6-cd5871878dd6/chat" 
        style="width:100%; height: calc(100% - 80px); border: none;">
      </iframe>
      <div class="chat-footer">
        <a href="https://lp.startupmiracle.com" target="_blank">Powered by Startup Miracle 🚀</a>
      </div>
    </div>
    <button class="chat-toggle" id="n8n-chat-toggle">
      💬
    </button>
  `;

  document.body.appendChild(widget);

  const toggleBtn = document.getElementById('n8n-chat-toggle');
  const chatBox = document.getElementById('n8n-chat-box');

  toggleBtn.addEventListener('click', () => {
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
    chatBox.style.flexDirection = 'column';
  });
})();
