import React from "react";
import { useNavigate } from "react-router-dom";
function Chat() {
  const navigateTo = useNavigate();
  return (
    <div>
      <p>Chat</p>
      <button onClick={() => navigateTo("/")}>Back</button>
    </div>
  );
}

export default Chat;
