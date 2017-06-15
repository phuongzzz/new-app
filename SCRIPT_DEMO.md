## SCRIPT DEMO FOR PROJECT 2
1. Access website:  [sie-intern.herokuapp.com](sie-intern.herokuapp.com)
2. Test:  HomePage
    * Instruct btn "Login"
    * Instruct btn "Contact"
      * Using btn "Contact": send a request to admin to create an account for me
3. Test Admin Page:
    * Join to Admin Page by account : user: admin , pass: admin.
    * View "Notification Page":
      * You will see contacts from user and admin can create an account by click to btn "create" at notification.
      * Then click  btn "create"move to "Add User" page. We create an account and select role for user in here and click "save"/ "cancel"
    * At "Mark" page:
      * Admin can view list mark of students.
      * Demo function "search".
      * Besides, admin can export list mark. But this function we can't do.
    * Demo "User" page:
      * List Users
      * Demo function search: Lowercase letters, upcase letters, vietnamese,...
      * Click in a user, then "Manage User" page view, admin can click btn "Delete this user"/ edit email of "user" and click btn "Save".
      * Demo btn "Add User":
        * Page "Add User " display.
        * Admin can create an account and select role for user in here.
        * Admin can create another account is admin.
      * Logout Admin
4. Test Company's Agent:
      * If not account, company's agent can contact to admin to request admin create an account .
      * Login : user: leha, pass: leha
      * Notification page: view information of company's agent. Besides, we want development function "view notification when admin created account"
      * "Register Topic" page:
        * Topic list.
        * Demo function "search" the sample with another page.
        * Click in "Topic Title" to see "Detail topic"
          * Click btn " Back to topics" to go back to the previous page.
        * Click btn "Create New Topic":
          * Fill in the fields.
          * Click save/cancel.
        * Log out
5. Test Students:
      * If not account, can contact to admin to request admin create an account .
      * Login : user: phuongzzz, pass: phuongzzz
      * Notification.
      * "Register Topic" page:
        * List Topic.
        * Search.
        * Click in "Topic Title" to see "Detail topic"
          * Click btn " Back to topics" to go back to the previous page.
        * Click btn "Register Topic" to register topic:
          * List registed topic will display in below table.
          * If choose more than 3 topics then the system will report an error.
        * Click btn "Unregister Topic "
          * To cancel "registed topic"
        * Internship schedule:
          * View detail report for topic.
      * "Report" page:
        * List report of students.
        * Click in "ID" view information of that student
        * Test "search" the sample with another pages.
        * Click "Add new report":
          * Fill in the fields
          * click save/cancel
          * check report displayed in the list.
       * "Mark" page:
          * List mark.
          * "Export" , but not active yet.
       * "Assign" Page:
          * List "registed topic"
          * Student waitting teacher's manager assign topic then assigned topic will display in table.
       * "List CV" Page
          * click btn "view" : view detail CV of students.
          * click btn "Add new CV" :
            * fill in the fields
            * click create/cancel
       * Forum Page:
          * Can see response of companys and students
          * Can create response.
       * Internship status:
          * Display internship status.
       * Log out
6. Test Teacher's manager:
       * Login : huonggiang , huonggiang
       * Approve topic:
          * List atvailable topic  which company's agent created, manager can approve that topic.
          * List registed topic, and manage can approve that topic.
          * Search.
       * Mark Page:
          * List mark
          * Search
          * Click "Id", manage can edit mark and choose "save"
       * Assign Page:
          * List registed topic and can click "approve" to assign topic for students
          * List assigned topic.
       * List CV
          * View CV
       * Forum
          * View response of companys and students
       * Internship status: not yet working
7. Test Teacher's instructor:
       * Register topic Page:
          * List topic
          * List registed topic.
          * search
       * Report page:
          * List report
          * search
       * Mark page:
          * search
          * view mark
          * edit mark
          * export: not yet working
       * Assign Page:
          * view list assigned topic
          * list registed topic
       * List Cv page:
          * List CV
          * view single cv
        * Forum Page:
          * View response of companys and students
        * Internship status.
8. Company's instructor:
        * Account : phuongthao, phuongthao
        * Register Page:
          * List topic.
          * List registed topic
        * "Assign" page:
          * View list assigned topic
        * List CV
          * View CV of students
        * Forum
          * View response of students and companys
          * Create new response in forum company.
        * Log out.
