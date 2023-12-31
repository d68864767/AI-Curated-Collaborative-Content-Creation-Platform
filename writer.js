```javascript
// Importing the User class from user.js
const User = require('./user.js');

// Importing the AI class from ai.js
const AI = require('./ai.js');

// Importing the Project class from project.js
const Project = require('./project.js');

// Writer class that extends User
class Writer extends User {
    constructor() {
        super();
        this.role = 'Writer';
    }

    // Method for writer to join a project
    joinProject(project) {
        console.log(`Writer ${this.name} joined the project: ${project.topic}`);
    }

    // Method for writer to collaborate with AI
    collaborateWithAI(ai, project) {
        // AI provides content suggestions
        const contentSuggestions = ai.provideContentSuggestions();
        // Writer adds content to the project
        project.addContent(contentSuggestions);
        console.log(`Writer ${this.name} collaborated with AI and added content to the project: ${project.content}`);
    }

    // Method for writer to refine and edit content
    refineAndEditContent(project, refinedContent) {
        project.content = refinedContent;
        console.log(`Writer ${this.name} refined and edited the content: ${project.content}`);
    }
}

// Exporting the Writer class
module.exports = Writer;
```
