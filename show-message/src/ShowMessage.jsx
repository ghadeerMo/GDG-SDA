import { useState } from "react";

function ShowMessage() {
  const [visible, setVisible] = useState(false);
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <button onClick={() => setVisible(!visible)}>
        {!visible ? "Show Message" : "Hide Message"}
      </button>
      <p>{visible ? "Welcome to React Workshop" : ""}</p>
    </div>
  );
}

export default ShowMessage;
