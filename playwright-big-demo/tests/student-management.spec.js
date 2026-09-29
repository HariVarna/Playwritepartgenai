const { test, expect } = require("@playwright/test");

test.describe("Student Registration Automation", () => {

    test("Register Student and Show in Student List", async ({ page }) => {

        // =====================================
        // STEP 1 - OPEN WEBSITE
        // =====================================

        console.log("STEP 1: Opening Student Management System");

        await page.goto("/");

        await page.waitForTimeout(1500);


        // =====================================
        // STEP 2 - LOGIN PAGE
        // =====================================

        console.log("STEP 2: Checking Login Page");

        await expect(
            page.getByRole("heading", {
                name: "Student Portal"
            })
        ).toBeVisible();


        // =====================================
        // STEP 3 - ENTER USERNAME
        // =====================================

        console.log("STEP 3: Entering Username");

        await page
            .getByLabel("Username")
            .fill("admin");

        await page.waitForTimeout(1000);


        // =====================================
        // STEP 4 - ENTER PASSWORD
        // =====================================

        console.log("STEP 4: Entering Password");

        await page
            .getByLabel("Password")
            .fill("admin123");

        await page.waitForTimeout(1000);


        // =====================================
        // STEP 5 - LOGIN
        // =====================================

        console.log("STEP 5: Clicking Login");

        await page
            .getByRole("button", {
                name: "Login"
            })
            .click();

        await page.waitForTimeout(1500);


        // =====================================
        // STEP 6 - VERIFY DASHBOARD
        // =====================================

        console.log("STEP 6: Dashboard Loaded");

        await expect(
            page.getByRole("heading", {
                name: "Dashboard"
            })
        ).toBeVisible();

        await page.waitForTimeout(1000);


        // =====================================
        // STEP 7 - OPEN REGISTER STUDENT
        // =====================================

        console.log("STEP 7: Opening Student Registration");

        await page
            .getByRole("button", {
                name: /Register Student/
            })
            .first()
            .click();

        await page.waitForTimeout(1200);


        // =====================================
        // STEP 8 - STUDENT NAME
        // =====================================

        console.log("STEP 8: Entering Student Name");

        await page
            .getByLabel("Full Name")
            .fill("Devika Automation Student");

        await page.waitForTimeout(800);


        // =====================================
        // STEP 9 - EMAIL
        // =====================================

        console.log("STEP 9: Entering Email");

        await page
            .getByLabel("Email")
            .fill("devika@student.com");

        await page.waitForTimeout(800);


        // =====================================
        // STEP 10 - PHONE
        // =====================================

        console.log("STEP 10: Entering Phone");

        await page
            .getByLabel("Phone")
            .fill("9876543210");

        await page.waitForTimeout(800);


        // =====================================
        // STEP 11 - COURSE
        // =====================================

        console.log("STEP 11: Selecting Course");

        await page
            .getByLabel("Course")
            .selectOption({
                label: "Playwright"
            });

        await page.waitForTimeout(800);


        // =====================================
        // STEP 12 - CITY
        // =====================================

        console.log("STEP 12: Entering City");

        await page
            .getByLabel("City")
            .fill("Coimbatore");

        await page.waitForTimeout(1000);


        // =====================================
        // STEP 13 - REGISTER
        // =====================================

        console.log("STEP 13: Registering Student");

        await page
            .locator("#studentForm")
            .getByRole("button", {
                name: "Register Student",
                exact: true
            })
            .click();


        // =====================================
        // STEP 14 - SUCCESS MESSAGE
        // =====================================

        console.log("STEP 14: Checking Registration Success");

        await expect(
            page.getByText(
                "Student registered successfully!"
            )
        ).toBeVisible();

        console.log("SUCCESS: Student Registered!");

        await page.waitForTimeout(2000);


        // =====================================
        // STEP 15 - OPEN STUDENTS
        // =====================================

        console.log("STEP 15: Opening Student List");

        await page
            .getByRole("button", {
                name: "Students"
            })
            .click();

        await page.waitForTimeout(1500);


        // =====================================
        // STEP 16 - VERIFY STUDENTS PAGE
        // =====================================

        console.log("STEP 16: Student List Opened");

        await expect(
            page.getByRole("heading", {
                name: "Students"
            })
        ).toBeVisible();


        // =====================================
        // STEP 17 - SEARCH STUDENT
        // =====================================

        console.log("STEP 17: Searching Registered Student");

        await page
            .getByPlaceholder("🔍 Search students...")
            .fill("Devika Automation Student");

        await page.waitForTimeout(1500);


        // =====================================
        // STEP 18 - VERIFY STUDENT
        // =====================================

        console.log("STEP 18: Verifying Student");

        await expect(
            page.getByText(
                "Devika Automation Student"
            )
        ).toBeVisible();


        // =====================================
        // FINAL
        // =====================================

        console.log(
            "FINAL: Student successfully registered and displayed in Student List"
        );

        // Keep browser visible for 10 seconds
        await page.waitForTimeout(10000);

    });
});