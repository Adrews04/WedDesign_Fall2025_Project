"use strict";
const localTs = window.ts;
const codeInput = document.getElementById("codeInput");
const runBtn = document.getElementById("runBtn");
const codeOutput = document.getElementById("codeOutput");
function run() {
    const code = (codeInput === null || codeInput === void 0 ? void 0 : codeInput.value) || "";
    if (codeOutput) {
        codeOutput.textContent = localTs.transpileModule(code, {
            compilerOptions: { module: localTs.ModuleKind.ESNext, target: localTs.ScriptTarget.ES2015 },
        }).outputText;
    }
}
runBtn === null || runBtn === void 0 ? void 0 : runBtn.addEventListener("click", run);
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => run());
}
else {
    run();
}
//# sourceMappingURL=getting_started.js.map