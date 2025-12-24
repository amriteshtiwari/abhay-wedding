
// This service simulates a connection to a Google Sheet via a Google Apps Script Web App.
// In a real deployment, you would create a Google Apps Script attached to a Google Sheet,
// deploy it as a Web App, and use that URL here.

// Example Google Apps Script Code:
/*
  function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([new Date(), data.name, data.guests]);
    return ContentService.createTextOutput(JSON.stringify({result: 'success'})).setMimeType(ContentService.MimeType.JSON);
  }
*/

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzGowpUjpiNZQFxUyis5lreLnqkRyjSY-F0OJz9LsAEG-n3yRLWbvYmKAuyNHIrSjskUQ/exec'; // Replace with your actual deployment URL if you have one.

export const submitRSVPToSheet = async (name: string, guests: number): Promise<boolean> => {
  console.log(`Submitting RSVP for ${name} with ${guests} guests...`);
  
  if (!GOOGLE_SCRIPT_URL) {
    // Simulation mode for demonstration
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Simulated Google Sheet Entry Created.");
        resolve(true);
      }, 1500);
    });
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ name, guests }),
      headers: {
        'Content-Type': 'text/plain;charset=utf-8', // Google Apps Script often requires this content type to avoid CORS preflight issues
      },
    });
    
    if (response.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error submitting RSVP:", error);
    return false;
  }
};
