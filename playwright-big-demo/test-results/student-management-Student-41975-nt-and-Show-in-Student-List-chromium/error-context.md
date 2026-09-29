# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: student-management.spec.js >> Student Registration Automation >> Register Student and Show in Student List
- Location: tests\student-management.spec.js:5:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Devika Automation Student')
Expected: visible
Error: strict mode violation: getByText('Devika Automation Student') resolved to 2 elements:
    1) <td>↵                        Devika Automation Studen…</td> aka locator('#recentStudents').getByText('Devika Automation Student')
    2) <strong>Devika Automation Student</strong> aka getByRole('row', { name: '1003 Devika Automation' }).getByRole('strong')

Call log:
  - Expect "toBeVisible" getByText('Devika Automation Student') with timeout 5000ms
  - waiting for getByText('Devika Automation Student')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - complementary [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]: 🎓
      - generic [ref=e6]: EduManager
    - navigation [ref=e7]:
      - button "📊 Dashboard" [ref=e8] [cursor=pointer]
      - button "👨‍🎓 Register Student" [ref=e9] [cursor=pointer]
      - button "📋 Students" [ref=e10] [cursor=pointer]
      - button "🎓 Courses" [ref=e11] [cursor=pointer]
      - button "📈 Reports" [ref=e12] [cursor=pointer]
    - button "🚪 Logout" [ref=e13] [cursor=pointer]
  - main [ref=e14]:
    - generic [ref=e15]:
      - generic [ref=e16]:
        - heading "Students" [level=2] [ref=e17]
        - paragraph [ref=e18]: Manage student records
      - generic [ref=e19]:
        - generic [ref=e20]: A
        - generic [ref=e21]:
          - strong [ref=e22]: Admin
          - generic [ref=e23]: Administrator
    - generic [ref=e25]:
      - generic [ref=e26]:
        - generic [ref=e27]:
          - heading "Student Records" [level=3] [ref=e28]
          - paragraph [ref=e29]: Manage registered students
        - button "+ Add Student" [ref=e30] [cursor=pointer]
      - generic [ref=e31]:
        - textbox "🔍 Search students..." [active] [ref=e32]: Devika Automation Student
        - combobox [ref=e33]:
          - option "All Courses" [selected]
          - option "Playwright"
          - option "Python"
          - option "JavaScript"
          - option "MLOps"
          - option "React"
      - table [ref=e34]:
        - rowgroup [ref=e35]:
          - row [ref=e36]:
            - columnheader "ID" [ref=e37]
            - columnheader "Student" [ref=e38]
            - columnheader "Email" [ref=e39]
            - columnheader "Course" [ref=e40]
            - columnheader "City" [ref=e41]
            - columnheader "Status" [ref=e42]
            - columnheader "Action" [ref=e43]
        - rowgroup [ref=e44]:
          - row [ref=e45]:
            - cell "1003" [ref=e46]
            - cell [ref=e47]:
              - strong [ref=e48]: Devika Automation Student
            - cell "devika@student.com" [ref=e49]
            - cell "Playwright" [ref=e50]
            - cell "Coimbatore" [ref=e51]
            - cell "Active" [ref=e52]
            - cell [ref=e53]:
              - button "✏️" [ref=e54] [cursor=pointer]
              - button "🗑️" [ref=e55] [cursor=pointer]
```

# Test source

```ts
  153 | 
  154 |         await page.waitForTimeout(800);
  155 | 
  156 | 
  157 |         // =====================================
  158 |         // STEP 12 - CITY
  159 |         // =====================================
  160 | 
  161 |         console.log("STEP 12: Entering City");
  162 | 
  163 |         await page
  164 |             .getByLabel("City")
  165 |             .fill("Coimbatore");
  166 | 
  167 |         await page.waitForTimeout(1000);
  168 | 
  169 | 
  170 |         // =====================================
  171 |         // STEP 13 - REGISTER
  172 |         // =====================================
  173 | 
  174 |         console.log("STEP 13: Registering Student");
  175 | 
  176 |         await page
  177 |             .locator("#studentForm")
  178 |             .getByRole("button", {
  179 |                 name: "Register Student",
  180 |                 exact: true
  181 |             })
  182 |             .click();
  183 | 
  184 | 
  185 |         // =====================================
  186 |         // STEP 14 - SUCCESS MESSAGE
  187 |         // =====================================
  188 | 
  189 |         console.log("STEP 14: Checking Registration Success");
  190 | 
  191 |         await expect(
  192 |             page.getByText(
  193 |                 "Student registered successfully!"
  194 |             )
  195 |         ).toBeVisible();
  196 | 
  197 |         console.log("SUCCESS: Student Registered!");
  198 | 
  199 |         await page.waitForTimeout(2000);
  200 | 
  201 | 
  202 |         // =====================================
  203 |         // STEP 15 - OPEN STUDENTS
  204 |         // =====================================
  205 | 
  206 |         console.log("STEP 15: Opening Student List");
  207 | 
  208 |         await page
  209 |             .getByRole("button", {
  210 |                 name: "Students"
  211 |             })
  212 |             .click();
  213 | 
  214 |         await page.waitForTimeout(1500);
  215 | 
  216 | 
  217 |         // =====================================
  218 |         // STEP 16 - VERIFY STUDENTS PAGE
  219 |         // =====================================
  220 | 
  221 |         console.log("STEP 16: Student List Opened");
  222 | 
  223 |         await expect(
  224 |             page.getByRole("heading", {
  225 |                 name: "Students"
  226 |             })
  227 |         ).toBeVisible();
  228 | 
  229 | 
  230 |         // =====================================
  231 |         // STEP 17 - SEARCH STUDENT
  232 |         // =====================================
  233 | 
  234 |         console.log("STEP 17: Searching Registered Student");
  235 | 
  236 |         await page
  237 |             .getByPlaceholder("🔍 Search students...")
  238 |             .fill("Devika Automation Student");
  239 | 
  240 |         await page.waitForTimeout(1500);
  241 | 
  242 | 
  243 |         // =====================================
  244 |         // STEP 18 - VERIFY STUDENT
  245 |         // =====================================
  246 | 
  247 |         console.log("STEP 18: Verifying Student");
  248 | 
  249 |         await expect(
  250 |             page.getByText(
  251 |                 "Devika Automation Student"
  252 |             )
> 253 |         ).toBeVisible();
      |           ^ Error: expect(locator).toBeVisible() failed
  254 | 
  255 | 
  256 |         // =====================================
  257 |         // FINAL
  258 |         // =====================================
  259 | 
  260 |         console.log(
  261 |             "FINAL: Student successfully registered and displayed in Student List"
  262 |         );
  263 | 
  264 |         // Keep browser visible for 10 seconds
  265 |         await page.waitForTimeout(10000);
  266 | 
  267 |     });
  268 | });
```