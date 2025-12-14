async function printAsyncMessages() {
    const output = document.getElementById("exampleOutput");
    if (!output) return;

    const delayMessage = (message: string, ms: number) =>
        new Promise<string>(resolve => setTimeout(() => resolve(message), ms));

    const p1 = delayMessage("Message 1 (300ms delay)", 300);
    const p2 = delayMessage("Message 2 (500ms delay)", 500);
    const p3 = delayMessage("Message 3 (200ms delay)", 200);

    output.textContent = "Starting...\n";

    await Promise.all([
        p1.then(v => { output.textContent += v + "\n"; }),
        p2.then(v => { output.textContent += v + "\n"; }),
        p3.then(v => { output.textContent += v + "\n"; }),
    ]);
}

document.getElementById("runExample")?.addEventListener("click", printAsyncMessages);