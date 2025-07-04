import React, { useEffect } from "react";

const FlodeskEmbed = () => {
  useEffect(() => {
    const loadFlodeskScripts = () => {
      if (window.fd) {
        window.fd("form", { formId: "6867396c96033be91b04a8b1" });
        return;
      }

      window.FlodeskObject = "fd";
      window.fd =
        window.fd ||
        function () {
          (window.fd.q = window.fd.q || []).push(arguments);
        };

      const version = "?v=" + Math.floor(new Date().getTime() / (120 * 1000)) * 60;

      const firstScript = document.getElementsByTagName("script")[0];

      const scriptModule = document.createElement("script");
      scriptModule.async = true;
      scriptModule.type = "module";
      scriptModule.src = "https://assets.flodesk.com/universal.mjs" + version;
      firstScript.parentNode.insertBefore(scriptModule, firstScript);

      const scriptNoModule = document.createElement("script");
      scriptNoModule.async = true;
      scriptNoModule.noModule = true;
      scriptNoModule.src = "https://assets.flodesk.com/universal.js" + version;
      firstScript.parentNode.insertBefore(scriptNoModule, firstScript);

      setTimeout(() => {
        if (window.fd) {
          window.fd("form", { formId: "6867396c96033be91b04a8b1" });
        }
      }, 2000);
    };

    loadFlodeskScripts();
  }, []);

  return (
    <div>
      {/* Flodesk mounts the form here */}
      <div id="flodesk-form-container"></div>
    </div>
  );
};

export default FlodeskEmbed;
