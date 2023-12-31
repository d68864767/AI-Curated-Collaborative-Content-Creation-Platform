```javascript
// Project class
class Project {
    constructor() {
        this.topic = '';
        this.audience = '';
        this.goals = '';
        this.content = '';
        this.design = '';
    }

    // Method for project initiation
    initiate() {
        // Here you can add code for user input or use dummy data
        this.topic = 'AI in Content Creation';
        this.audience = 'Content Creators';
        this.goals = 'Educate about the benefits of AI in content creation';
        console.log(`Project initiated with topic: ${this.topic}, audience: ${this.audience}, and goals: ${this.goals}`);
    }

    // Method for adding content to the project
    addContent(content) {
        this.content = content;
        console.log(`Content added to the project: ${this.content}`);
    }

    // Method for adding design to the project
    addDesign(design) {
        this.design = design;
        console.log(`Design added to the project: ${this.design}`);
    }

    // Method for finalizing the project
    finalize() {
        console.log(`Project finalized with content: ${this.content}, and design: ${this.design}`);
    }
}

// Exporting the Project class
module.exports = Project;
```
