function updateLive() {

  const idea = document.getElementById("idea")?.value || "[your idea]";
  const emotion1 = document.getElementById("emotion1")?.value || "[emotion]";
  const reason1 = document.getElementById("reason1")?.value || "[reason]";
  const emotion2 = document.getElementById("emotion2")?.value || "[emotion]";
  const reason2 = document.getElementById("reason2")?.value || "[reason]";
  const challenge = document.getElementById("challenge")?.value || "[challenge]";
  const action = document.getElementById("action")?.value || "[action]";

  const output = document.getElementById("output");
  if (!output) return;

  output.innerHTML = `
    Yes, I have thought about starting a business in <strong>${idea}</strong>.

    At first, I felt <strong>${emotion1}</strong> because <strong>${reason1}</strong>.

    However, I also felt <strong>${emotion2}</strong> because <strong>${reason2}</strong>.

    Over time, I realised my main challenge is <strong>${challenge}</strong>, and I am working on it by <strong>${action}</strong>.
  `;
}