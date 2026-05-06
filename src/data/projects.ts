export type CodeSnippet = {
  title: string;
  language: string;
  code: string;
  explanation: string;
};

export type Screenshot = {
  title: string;
  description: string;
  image: string;
};

export type Challenge = {
  problem: string;
  solution: string;
};

export type Project = {
  slug: string;
  projectNumber: number;
  title: string;
  shortDescription: string;
  overview: string;
  objectives: string[];
  features: string[];
  codeSnippets: CodeSnippet[];
  screenshots: Screenshot[];
  tools: string[];
  challenges: Challenge[];
  reflection: string;
};

const placeholderScreenshots: Screenshot[] = [
  {
    title: "UI Screenshot",
    description: "Replace this image with the main interface or output screen for this project.",
    image: "/placeholder-screenshot.svg",
  },
  {
    title: "Output Result",
    description: "Use this area for a result, preview, console output, or finished system view.",
    image: "/placeholder-screenshot.svg",
  },
];

const commonSnippets: CodeSnippet[] = [
  {
    title: "Core Logic Placeholder",
    language: "ts",
    code: `function runProjectFeature(input: string) {
  const cleanedInput = input.trim();
  return cleanedInput.length > 0 ? cleanedInput : "Editable placeholder";
}`,
    explanation:
      "Replace this snippet with one important part of your actual project. Keep it short and explain why it was useful.",
  },
  {
    title: "Interface or Output Placeholder",
    language: "tsx",
    code: `export function ProjectPreview() {
  return <section>Replace this with a meaningful UI or output snippet.</section>;
}`,
    explanation:
      "Use this second snippet for a UI component, data structure, algorithm, or output handling block.",
  },
];

export const projects: Project[] = [
  {
    slug: "project-1",
    projectNumber: 1,
    title: "Project 1: Editable Activity Title",
    shortDescription:
      "A placeholder summary for the first PTF04 project, ready to be replaced with the actual activity details.",
    overview:
      "This project placeholder represents one of the early activities completed in PTF04. Replace this overview with the actual project background, topic, and final output.",
    objectives: [
      "Identify the main purpose of the project and the problem it solves.",
      "Practice applying foundational technical skills introduced in the course.",
      "Create a clear output that demonstrates understanding of the activity requirements.",
    ],
    features: [
      "Editable feature list for important functions or outputs.",
      "Organized layout for presenting process, code, and results.",
      "Reflection section to connect the project to your learning journey.",
    ],
    codeSnippets: commonSnippets,
    screenshots: placeholderScreenshots,
    tools: ["HTML", "CSS", "JavaScript", "VS Code"],
    challenges: [
      {
        problem: "Understanding how to organize the project requirements into a finished output.",
        solution: "Break the task into smaller parts, test each section, and improve the final presentation step by step.",
      },
    ],
    reflection:
      "Replace this reflection with what you learned from Project 1, including the skills you practiced and the parts that helped you grow.",
  },
  {
    slug: "project-2",
    projectNumber: 2,
    title: "Project 2: Editable Activity Title",
    shortDescription:
      "A realistic placeholder for a second activity focused on improving structure, design, or programming logic.",
    overview:
      "This project can be used to showcase a second PTF04 requirement. Add the actual description, expected output, and the role it played in your technical growth.",
    objectives: [
      "Apply course concepts to a more structured activity.",
      "Improve accuracy, readability, and presentation of the output.",
      "Document the process through screenshots, snippets, and reflection.",
    ],
    features: [
      "Clear project summary with objectives and tools.",
      "Space for important code or design decisions.",
      "Screenshot cards that can be replaced with actual visuals.",
    ],
    codeSnippets: commonSnippets,
    screenshots: placeholderScreenshots,
    tools: ["HTML", "CSS", "JavaScript", "Git"],
    challenges: [
      {
        problem: "Making the output easier to understand for viewers.",
        solution: "Use headings, labels, comments, and clean formatting so the work is easier to follow.",
      },
    ],
    reflection:
      "Replace this with your own reflection about Project 2. Mention what became easier, what remained challenging, and what you improved.",
  },
  {
    slug: "project-3",
    projectNumber: 3,
    title: "Project 3: Editable Activity Title",
    shortDescription:
      "An editable card for a project that may involve layout, interface design, problem solving, or technical documentation.",
    overview:
      "Use this page to document the third project from your PTF04 compilation. Describe the context, requirements, and finished result in your own words.",
    objectives: [
      "Build confidence in turning instructions into a working output.",
      "Use appropriate tools and technologies for the activity.",
      "Explain the project clearly through a portfolio-ready format.",
    ],
    features: [
      "Project detail page with reusable sections.",
      "Feature highlights for important functionality.",
      "Editable content that can be updated without changing the page layout.",
    ],
    codeSnippets: commonSnippets,
    screenshots: placeholderScreenshots,
    tools: ["TypeScript", "CSS", "Browser DevTools", "VS Code"],
    challenges: [
      {
        problem: "Keeping the project organized while adding more details.",
        solution: "Group related information together and use a consistent naming style for files and sections.",
      },
    ],
    reflection:
      "Replace this reflection with the specific lessons from Project 3, such as better debugging, clearer planning, or stronger visual presentation.",
  },
  {
    slug: "project-4",
    projectNumber: 4,
    title: "Project 4: Editable Activity Title",
    shortDescription:
      "A placeholder for a mid-course project that shows progress in planning, coding, testing, or presenting work.",
    overview:
      "This editable overview should be replaced with the actual story of Project 4. Include what the project asked you to create and how you approached it.",
    objectives: [
      "Demonstrate improved technical planning.",
      "Create an output that is functional, readable, and properly presented.",
      "Reflect on the problem-solving steps used during development.",
    ],
    features: [
      "Structured overview and objective list.",
      "Visual placeholders for screenshots and outputs.",
      "Challenge and solution notes for honest documentation.",
    ],
    codeSnippets: commonSnippets,
    screenshots: placeholderScreenshots,
    tools: ["JavaScript", "TypeScript", "CSS", "Vercel"],
    challenges: [
      {
        problem: "Fixing errors that appeared after connecting multiple parts of the project.",
        solution: "Check one part at a time, read error messages carefully, and test again after each fix.",
      },
    ],
    reflection:
      "Replace this with what Project 4 taught you about persistence, code organization, and improving a project through revision.",
  },
  {
    slug: "project-5",
    projectNumber: 5,
    title: "Project 5: Editable Activity Title",
    shortDescription:
      "A project card prepared for a more advanced activity involving multiple features, files, or design decisions.",
    overview:
      "Project 5 can be used for an activity where the output became more detailed. Add your actual topic, purpose, and finished result here.",
    objectives: [
      "Strengthen the connection between design, code, and user experience.",
      "Practice explaining technical choices in a simple and understandable way.",
      "Show evidence of progress through visuals and selected code snippets.",
    ],
    features: [
      "Multiple sections for technical and personal documentation.",
      "Tool tags for quickly showing the technologies used.",
      "Editable screenshots for before-and-after or input-and-output views.",
    ],
    codeSnippets: commonSnippets,
    screenshots: placeholderScreenshots,
    tools: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    challenges: [
      {
        problem: "Balancing visual design with functionality.",
        solution: "Prioritize readability first, then add small design details that support the content.",
      },
    ],
    reflection:
      "Replace this reflection with your experience from Project 5, especially how your confidence changed compared with earlier projects.",
  },
  {
    slug: "project-6",
    projectNumber: 6,
    title: "Project 6: Editable Activity Title",
    shortDescription:
      "A flexible placeholder for a project that may involve interactivity, documentation, deployment, or user-focused design.",
    overview:
      "Use this overview to describe the sixth PTF04 project. Mention the final output, its purpose, and how it connects to your learning journey.",
    objectives: [
      "Build a more complete and polished project output.",
      "Practice testing and improving the result based on issues found.",
      "Document the project in a way that future viewers can understand quickly.",
    ],
    features: [
      "Reusable page template for consistent documentation.",
      "Dedicated space for challenges and solutions.",
      "Clean layout for code snippets and screenshot previews.",
    ],
    codeSnippets: commonSnippets,
    screenshots: placeholderScreenshots,
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub"],
    challenges: [
      {
        problem: "Making the project responsive or presentable on different screen sizes.",
        solution: "Use flexible layouts, test on smaller screens, and simplify sections when space is limited.",
      },
    ],
    reflection:
      "Replace this with what Project 6 helped you understand about responsive design, testing, or presenting your work professionally.",
  },
  {
    slug: "project-7",
    projectNumber: 7,
    title: "Project 7: Editable Activity Title",
    shortDescription:
      "An editable advanced project entry for highlighting stronger technical decisions and more polished presentation.",
    overview:
      "Project 7 is prepared for one of the later activities in your compilation. Replace this text with the project goal, process, and final result.",
    objectives: [
      "Show stronger technical independence and problem-solving.",
      "Use clear organization for project files, outputs, and explanations.",
      "Reflect on skills gained near the end of the course.",
    ],
    features: [
      "Detailed feature list for important functionality.",
      "Code snippet areas with explanations instead of full code dumps.",
      "Polished visual cards for screenshots and system previews.",
    ],
    codeSnippets: commonSnippets,
    screenshots: placeholderScreenshots,
    tools: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    challenges: [
      {
        problem: "Explaining technical work in a way that feels personal and professional.",
        solution: "Write short explanations that focus on purpose, process, and what was learned.",
      },
    ],
    reflection:
      "Replace this with your Project 7 reflection, including the technical skills and work habits you improved during the activity.",
  },
  {
    slug: "project-8",
    projectNumber: 8,
    title: "Project 8: Editable Activity Title",
    shortDescription:
      "The final editable project entry, ideal for presenting a capstone-style output or final course requirement.",
    overview:
      "Use this final project page to present the last PTF04 activity. Describe what makes it meaningful and how it shows your overall progress.",
    objectives: [
      "Bring together skills learned throughout PTF04.",
      "Present a complete project with clear evidence of technical growth.",
      "Reflect on the full learning journey from first project to final output.",
    ],
    features: [
      "Final project documentation with complete required sections.",
      "Editable screenshots for UI, output, or system previews.",
      "Reflection area for summarizing growth across the course.",
    ],
    codeSnippets: commonSnippets,
    screenshots: placeholderScreenshots,
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    challenges: [
      {
        problem: "Turning the full project compilation into a clear portfolio experience.",
        solution: "Use reusable components, consistent content sections, and a simple navigation structure.",
      },
    ],
    reflection:
      "Replace this with your final reflection for Project 8. Mention how this project represents your growth in PTF04 and what you want to keep improving.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
