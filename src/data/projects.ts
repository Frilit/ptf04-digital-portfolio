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
    title: "Machine Learning on Plant Growth",
    shortDescription:
      "A Google Colab machine learning activity that compares linear regression and a simple neural network for predicting plant growth based on temperature.",
    overview:
      "In this project, we created a Google Colab notebook that simulated plant growth across different temperature values. We first used a linear regression model to predict plant growth, then improved the approach by building a simple neural network model that could better follow the curved growth pattern where plant growth increases, reaches an ideal temperature range, and then declines.",
    objectives: [
      "Generate synthetic data that represents the relationship between temperature and plant growth.",
      "Train a linear regression model and observe how it performs on a non-linear growth pattern.",
      "Build a simple neural network model to create a more flexible prediction curve.",
      "Compare the results of both models through plotted visualizations.",
      "Develop a clearer understanding of how machine learning models learn from data.",
    ],
    features: [
      "Synthetic plant growth data simulation using temperature values from 0 C to 40 C.",
      "Linear regression model that shows the limitation of straight-line prediction.",
      "Neural network model that captures the rise-and-fall pattern of plant growth more accurately.",
      "Graph visualizations comparing true growth data with model predictions.",
      "Saved trained neural network model for later reuse or reference.",
    ],
    codeSnippets: [
      {
        title: "Plant Growth Data Simulation",
        language: "python",
        code: `np.random.seed(42)

temperatures = np.linspace(0, 40, 500)
growth = -0.1 * (temperatures - 25) ** 2 + 50 + np.random.normal(
    0,
    5,
    size=temperatures.shape,
)`,
        explanation:
          "This code creates synthetic plant growth data. The formula simulates growth increasing toward an ideal temperature near 25 C, then decreasing as the temperature moves farther away from that range.",
      },
      {
        title: "Linear Regression Training",
        language: "python",
        code: `model = LinearRegression()
model.fit(temperatures, growth)

growth_pred = model.predict(temperatures)`,
        explanation:
          "This snippet trains a linear regression model and uses it to predict plant growth. It is useful for comparison, but the straight-line prediction cannot fully match the curved plant growth pattern.",
      },
      {
        title: "Neural Network Model",
        language: "python",
        code: `model = Sequential([
    Dense(16, activation="relu", input_shape=(1,)),
    Dense(16, activation="relu"),
    Dense(1),
])

model.compile(optimizer=Adam(learning_rate=0.001), loss="mean_squared_error")
model.fit(temperatures, growth, epochs=1000, verbose=0)
model.save("plant_growth_model.h5")`,
        explanation:
          "This code builds and trains a simple neural network. With hidden layers and ReLU activation, the model can learn a more flexible pattern than linear regression and better follow the growth curve.",
      },
    ],
    screenshots: [
      {
        title: "Linear Regression Results",
        description:
          "Displays the true plant growth data and the linear regression prediction line. The straight line shows why linear regression is limited for this type of curved data.",
        image: "/projects/project-1/linear-regression-results.png",
      },
      {
        title: "Neural Network Results",
        description:
          "Displays the neural network prediction curve, which follows the plant growth pattern more closely than the linear regression model.",
        image: "/projects/project-1/neural-network-results.png",
      },
      {
        title: "Linear Regression Training",
        description:
          "Shows the training and prediction steps for the linear regression model.",
        image: "/projects/project-1/linear-regression-training.png",
      },
      {
        title: "Plant Growth Simulation Code",
        description:
          "Shows how the synthetic temperature and plant growth data were generated before training the models.",
        image: "/projects/project-1/plant-growth-simulation.png",
      },
      {
        title: "Neural Network Training",
        description:
          "Shows the neural network architecture, compilation step, training process, and saved model file.",
        image: "/projects/project-1/neural-network-training.png",
      },
    ],
    tools: [
      "Google Colab",
      "Python",
      "NumPy",
      "Matplotlib",
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "Linear Regression",
      "Neural Networks",
    ],
    challenges: [
      {
        problem:
          "I had a hard time understanding how plant growth was simulated using temperature values and why the generated data formed a curved pattern.",
        solution:
          "I analyzed the formula carefully, connected each part of the equation to the graph output, and pieced together the information until the simulation became clearer.",
      },
      {
        problem:
          "I also struggled with understanding how neural networks worked, especially how the layers helped improve the prediction compared with linear regression.",
        solution:
          "I reviewed the model step by step, compared the linear regression output with the neural network output, and used the visual graphs to understand how the neural network learned a better curve.",
      },
    ],
    reflection:
      "This project helped me understand that different machine learning models can produce very different results depending on the pattern of the data. Linear regression was easier to understand, but it also showed its limitation because plant growth does not follow a simple straight line. The neural network was more challenging at first, but seeing its prediction curve made me understand why it can be useful for more complex relationships. Through this activity, I improved my ability to read code, interpret graphs, compare model outputs, and connect machine learning concepts to a practical example.",
  },
  {
    slug: "project-2",
    projectNumber: 2,
    title: "Iris Classifier",
    shortDescription:
      "A machine learning classifier that uses the Iris dataset, compares KNN with an MLP neural network, and connects the trained model to an Anvil Works frontend.",
    overview:
      "In this project, we used the famous Iris dataset to create a KNN model and compared its performance with a Neural Network or MLP model. After training and evaluating the models in Google Colab, we created an Anvil Works frontend and connected it to the notebook so the app could classify an iris flower based on sepal length, sepal width, petal length, and petal width.",
    objectives: [
      "Use the Iris dataset to train a machine learning model for flower classification.",
      "Create a KNN classifier that predicts Setosa, Versicolor, or Virginica using four flower measurements.",
      "Compare the KNN model with a Neural Network or MLP model using evaluation metrics.",
      "Build a simple Anvil Works frontend where users can enter iris measurements.",
      "Connect the Google Colab model to the frontend through an Anvil server callable function.",
    ],
    features: [
      "KNN model trained on the Iris dataset.",
      "Neural Network or MLP model used for comparison.",
      "Model evaluation using accuracy, confusion matrix, and classification report.",
      "Anvil Works frontend with input boxes for sepal and petal measurements.",
      "Prediction output that displays the classified iris species with a matching flower image.",
    ],
    codeSnippets: [
      {
        title: "KNN Model Training",
        language: "python",
        code: `X = iris.data
y = iris.target

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=4,
)

knn = KNeighborsClassifier(n_neighbors=10)
knn.fit(X, y)`,
        explanation:
          "This part prepares the Iris dataset, splits it for testing, and trains the KNN model. I used this so the model could learn the relationship between the flower measurements and the correct iris species.",
      },
      {
        title: "KNN Model Evaluation",
        language: "python",
        code: `print("Scikit-learn kNN Model")
print(accuracy_score(y_test, y_pred))
print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))`,
        explanation:
          "This code checks how well the KNN model performed. The accuracy, confusion matrix, and classification report helped me see if the model was classifying the iris species correctly.",
      },
      {
        title: "Anvil Callable Prediction Function",
        language: "python",
        code: `import anvil.server

anvil.server.connect("YOUR_ANVIL_UPLINK_KEY")

@anvil.server.callable
def predict_iris(sepal_length, sepal_width, petal_length, petal_width):
    classification = knn.predict([[
        sepal_length,
        sepal_width,
        petal_length,
        petal_width,
    ]])
    return iris.target_names[classification][0]`,
        explanation:
          "This function connects the Google Colab notebook to Anvil Works. The frontend sends the measurements to this callable function, then the function returns the predicted iris species.",
      },
    ],
    screenshots: [
      {
        title: "Iris Classifier Preview Image",
        description:
          "A flower preview image used to represent the Iris Classifier project on the portfolio card.",
        image: "/projects/project-2/iris-preview.png",
      },
      {
        title: "KNN Model Training",
        description:
          "Shows the Iris data being assigned, split, and trained with a KNeighborsClassifier model.",
        image: "/projects/project-2/knn-model-training.png",
      },
      {
        title: "KNN Model Evaluation",
        description:
          "Shows the KNN model accuracy, confusion matrix, and classification report used to check model performance.",
        image: "/projects/project-2/knn-model-evaluation.png",
      },
      {
        title: "Neural Network MLP Evaluation",
        description:
          "Shows the evaluation results of the neural network model so it could be compared with the KNN classifier.",
        image: "/projects/project-2/mlp-model-evaluation.png",
      },
      {
        title: "Setosa Prediction Result",
        description:
          "Shows the Anvil Works frontend predicting the Setosa species using sample sepal and petal measurements.",
        image: "/projects/project-2/setosa-result.png",
      },
      {
        title: "Versicolor Prediction Result",
        description:
          "Shows the frontend predicting the Versicolor species and displaying its flower image.",
        image: "/projects/project-2/versicolor-result.png",
      },
      {
        title: "Virginica Prediction Result",
        description:
          "Shows the frontend predicting the Virginica species and displaying its flower image.",
        image: "/projects/project-2/virginica-result.png",
      },
    ],
    tools: [
      "Google Colab",
      "Python",
      "Anvil Works",
      "Anvil Uplink",
      "scikit-learn",
      "Iris Dataset",
      "KNN",
      "MLP Neural Network",
      "Matplotlib",
      "Classification Report",
      "Confusion Matrix",
    ],
    challenges: [
      {
        problem:
          "I had a hard time connecting the function from the Google Colab notebook so that the model predictions would properly show in the Anvil Works frontend.",
        solution:
          "I studied the code carefully, checked that the Anvil frontend text boxes and output fields were configured correctly, and made sure the function inside @anvil.server.callable worked with the proper Anvil uplink key.",
      },
      {
        problem:
          "It was also confusing at first to compare the KNN model with the Neural Network or MLP model because both used evaluation metrics that needed to be interpreted.",
        solution:
          "I reviewed the accuracy, confusion matrix, and classification report outputs so I could understand how each model performed on the Iris dataset.",
      },
    ],
    reflection:
      "This project helped me understand the fundamentals of Anvil Works and how a frontend can connect to a machine learning model running in Google Colab. I learned more about how input fields, output labels, callable functions, and uplink keys work together to make the app respond to user input. I also gained more knowledge about training a model using the Iris dataset and comparing model performance through evaluation metrics. Overall, this project helped me see how machine learning can become more useful when it is connected to an actual interface that people can interact with.",
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
