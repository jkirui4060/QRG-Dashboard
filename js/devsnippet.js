document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".dev-snippet").forEach(snippet => {

    const codeBlock = snippet.querySelector(".dev-code");
    const copyBtn = snippet.querySelector(".copy-btn");
    const runBtn = snippet.querySelector(".run-btn");
    const linuxBtn = snippet.querySelector(".linux-btn");
    const macBtn = snippet.querySelector(".mac-btn");

    function copyCode() {
      const text = codeBlock.innerText;
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.innerText = "Copied!";
        setTimeout(() => copyBtn.innerText = "Copy", 1500);
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener("click", copyCode);
    }

    if (runBtn) {
      runBtn.addEventListener("click", () => {
        copyCode();
        runBtn.innerText = "Ready to Run ✓";
        setTimeout(() => runBtn.innerText = "Copy & Run", 2000);
      });
    }

    if (linuxBtn) {
      linuxBtn.addEventListener("click", copyCode);
    }

    if (macBtn) {
      macBtn.addEventListener("click", copyCode);
    }

  });

});
