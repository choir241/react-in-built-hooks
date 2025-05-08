import React, { useInsertionEffect } from "react";

function StyledComponent() {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .injected-style {
        color: #86cecb;
        background-color: #137a7f;
      }
    `;
    document.head.appendChild(style);
  });

  return (
    <main>
      <h2 className="injected-style">Hatsune Miku is really cute</h2>
      <span className="regular-style">Waku waku</span>
    </main>
  );
}

export default StyledComponent;
