const { test, expect } = require("@playwright/test");

test.describe("Users List API tests", () => {
  test("fetches and displays users from real API", async ({ page }) => {
    // Navigate to the application page where UsersList component is rendered
    await page.goto("http://localhost:3000"); // Assuming the app runs locally

    // Wait for the users to load and appear in the DOM
    await page.waitForSelector("ul li");

    // Check if the first user from the API is displayed
    const firstUser = await page.locator("ul li:first-child").textContent();
    expect(firstUser).toContain("Leanne Graham"); // Example user from jsonplaceholder API
  });
});
