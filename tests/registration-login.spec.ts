import{test, expect} from "@playwright/test";

const uniqueEmail = `meera_${Date.now()}_${Math.floor(Math.random() * 10000)}@example.com`;
const testPassword = "puttu@2022";

test("User Registration Successfully", async({ page })=>{

    await page.goto("https://automationexercise.com/");
    
    await expect(page.locator("body")).toBeVisible();

    await page.locator('a[href="/login"]').click();
    await expect(page).toHaveURL("https://automationexercise.com/login");

    const name = page.locator('[data-qa="signup-name"]');
    const email = page.locator('[data-qa="signup-email"]');

    await name.fill("Meera");
    await email.fill(uniqueEmail);

    await page.getByRole("button", {name: "Signup"}).click();

    await expect(page).toHaveURL("https://automationexercise.com/signup");

    //Enter Account Information
    await expect(page.getByRole("heading", {name: "Enter Account Information", exact: true})).toBeVisible();
    
    const title = page.locator("#id_gender1");
    await title.check();
    await expect(title).toBeChecked();

    await expect(page.locator('[data-qa="name"]')).toHaveValue("Meera");
    await expect(page.locator('[data-qa="email"]')).toHaveValue(uniqueEmail);

    const password = page.locator('[data-qa="password"]');
    await password.fill("puttu@2022");
    await page.locator('[data-qa="days"]').selectOption("2");
    await expect(page.locator('[data-qa="days"]')).toHaveValue("2");

    await page.locator('[data-qa="months"]').selectOption("6");
    await expect(page.locator('[data-qa="months"]')).toHaveValue("6");

    await page.locator('[data-qa="years"]').selectOption("1983");
    await expect(page.locator('[data-qa="years"]')).toHaveValue("1983");

    const newsletter = page.locator("#newsletter");
    await newsletter.check();
    await expect(newsletter).toBeChecked();

    const optin = page.locator("#optin");
    await optin.check();
    await expect(optin).toBeChecked();

    //Address Information
    const firstName = page.locator('[data-qa="first_name"]');
    const lastName = page.locator('[data-qa="last_name"]');
    const company = page.locator('[data-qa="company"]');
    const address1 = page.locator('[data-qa="address"]');
    const address2 = page.locator('[data-qa="address2"]');

    await firstName.fill("Meerasi");
    await lastName.fill("Barik");
    await company.fill("WFH");
    await address1.fill("B-145");
    await address2.fill("Noida");

    await page.locator('[data-qa="country"]').selectOption("India");
    await expect(page.locator('[data-qa="country"]')).toHaveValue("India");

    const state = page.locator('[data-qa="state"]');
    const city = page.locator('[data-qa="city"]');
    const zipcode = page.locator('[data-qa="zipcode"]');
    const mobileNumber = page.locator('[data-qa="mobile_number"]');

    await state.fill("UP");
    await city.fill("Noida");
    await zipcode.fill("201301");
    await mobileNumber.fill("9070423561");

    await page.locator('[data-qa="create-account"]').click();

    await expect(page).toHaveURL("https://automationexercise.com/account_created");
    await expect(page.locator('[data-qa="account-created"]')).toHaveText("Account Created!");

    await page.locator('[data-qa="continue-button"]').click();
    await expect(page).toHaveURL("https://automationexercise.com/");

    await expect(page.locator('a[href="/logout"]')).toBeVisible();
    await expect(page.locator('a[href="/delete_account"]')).toBeVisible();

    await page.locator('a[href="/logout"]').click();
    await expect(page).toHaveURL("https://automationexercise.com/login");

});

test("User Login Successfully", async({ page })=>{

    await page.goto("https://automationexercise.com/");

    await page.locator('a[href="/login"]').click();
    await expect(page).toHaveURL("https://automationexercise.com/login");

    const loginEmail = page.locator('[data-qa="login-email"]');
    const loginPassword = page.locator('[data-qa="login-password"]');

    await page.locator('[data-qa="login-email"]').fill(uniqueEmail);
    await loginPassword.fill("puttu@2022");

    await page.locator('[data-qa="login-button"]').click();
    await expect(page.locator('a[href="/logout"]')).toBeVisible();
    await expect(page).toHaveURL("https://automationexercise.com/");

});