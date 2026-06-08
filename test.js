// test.js

function summarizeMeeting(text) {
  // super basic placeholder logic
  return "Summary: " + text.slice(0, 100) + "...";
}

// test input
const meetingNotes = `
Today we discussed API integration priorities, risks with vendor dependency,
and next steps for backend ownership alignment.
`;

const summary = summarizeMeeting(meetingNotes);

console.log(summary);
