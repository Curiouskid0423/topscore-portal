#   TopScore Portal Design
<hr>

**Table of Content** -- What to include in SWE design.
*   Component relationship (e.g. **`Higher-order Components`**)
*   Project structure (what files inherit what)
*   Be careful with mobile compatibility
*   Where will data come from

<hr>

### A. &nbsp;&nbsp;&nbsp; Functionalities
<br>

#### Front-end
:rocket: Sketch the components on a piece of paper for each webpage / UI.
- Pages & File hierarchy
- Functionality of each webpage (page-flow of user experience)
- Components 
    - Reusable components are marked with `R` tags.
    - Template components are marked with `T` tags.
- Data in a centralized Redux store

#### Backend 
- Database Structure
    - How many separated databases? What info should be nested within a column?


<hr>

### A. &nbsp;&nbsp;&nbsp; Implementations

#### Components by Webpage

1. ##### Login Page
    - `<Topbar />`
        - Logo    
        - `<Message />` shows which page the user is on. If the user isn't logged in, show a welcome message.
        
        - If logged in:
            - `<SearchBar />`
            - Button for notification (optional)
            - Profile tab (access to Settings page)
2. ##### Home (Greeting) Page
    - `<Topbar />`
    - `<Sidebar />`
<br>

#### Components and their details
- **Format**: Component name / does it need access to redux store / does it maintain a state / what props required

#### Component organization for each webpage

#### Algorithms 

#### Redux Store 

#### Actions

#### :rocket: Database Structure