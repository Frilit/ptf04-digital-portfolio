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
  previewOnly?: boolean;
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
    title: "Boston House Price Prediction",
    shortDescription:
      "A neural network prediction project that uses selected Boston housing features and an Anvil Works frontend to estimate house prices.",
    overview:
      "In this project, we used the Boston house price dataset to predict the prices of houses located in Boston based on three important features. After creating the Google Colab notebook, we identified the most relevant input features, applied feature scaling, and trained a simple neural network for 300 epochs because it gave the best possible result. After that, we deployed the model through an Anvil Works frontend so users could easily enter values and predict house prices.",
    objectives: [
      "Identify the most relevant features for predicting Boston house prices.",
      "Prepare and scale the selected input data before model training.",
      "Build and optimize a simple neural network model.",
      "Connect the trained model to an Anvil Works frontend for user predictions.",
    ],
    features: [
      "Boston housing dataset used for price prediction.",
      "Correlation-based feature selection using RM, LSTAT, and PTRATIO.",
      "Feature scaling with a scaler before model training and prediction.",
      "Simple neural network trained for 300 epochs.",
      "Anvil Works frontend for entering values and displaying predicted prices.",
    ],
    codeSnippets: [
      {
        title: "Identifying Relevant Features",
        language: "python",
        code: `corr["price"].sort_values(ascending=False)

selected_features = ["rm", "lstat", "ptratio"]`,
        explanation:
          "This part checks which dataset columns have the strongest relationship with price. I used this to decide which features should be included as inputs for the model.",
      },
      {
        title: "Building and Training the Neural Network",
        language: "python",
        code: `model = Sequential()
model.add(Dense(16, activation="relu", input_shape=(X_train.shape[1],)))
model.add(Dense(8, activation="relu"))
model.add(Dense(1))

model.compile(optimizer="adam", loss="mse")

history = model.fit(
    X_train,
    y_train,
    validation_split=0.2,
    epochs=300,
    batch_size=16,
    verbose=1,
)`,
        explanation:
          "This code creates a simple neural network with Dense layers and trains it for 300 epochs. The goal was to optimize the model enough to produce better house price predictions.",
      },
      {
        title: "Anvil Server Callable Prediction",
        language: "python",
        code: `@anvil.server.callable
def predict_boston_price(rm, lstat, ptratio):
    data = np.array([[rm, lstat, ptratio]])
    data_scaled = scaler.transform(data)
    prediction = model.predict(data_scaled)

    return float(prediction[0][0] * 1000)`,
        explanation:
          "This function receives the values from the Anvil frontend, scales them first, and then sends them to the model for prediction. Adding scaler.transform helped make the frontend result more accurate.",
      },
    ],
    screenshots: [
      {
        title: "Boston Housing Preview",
        description:
          "Preview image for the home and projects page card. This image is not shown inside the project detail page.",
        image: "/projects/project-3/boston-preview.jpg",
        previewOnly: true,
      },
      {
        title: "Identifying Relevant Features",
        description:
          "Shows the correlation values used to identify RM, LSTAT, and PTRATIO as important features for predicting price.",
        image: "/projects/project-3/identifying-relevant-features.png",
      },
      {
        title: "Building and Training the Model",
        description:
          "Shows the simple neural network structure, model compilation, and training setup using 300 epochs.",
        image: "/projects/project-3/building-training-model.png",
      },
      {
        title: "Anvil Server Callable",
        description:
          "Shows the server callable function that receives Anvil input values, scales them, and returns the predicted price.",
        image: "/projects/project-3/anvil-server-callable.png",
      },
      {
        title: "Prediction Result - Higher Price",
        description:
          "Shows the Anvil Works frontend returning a predicted house price based on user input values.",
        image: "/projects/project-3/prediction-high.png",
      },
      {
        title: "Prediction Result - Lower Price",
        description:
          "Shows another test case where the frontend successfully displays a different predicted price.",
        image: "/projects/project-3/prediction-low.png",
      },
      {
        title: "Prediction Result - Mid Price",
        description:
          "Shows a third prediction test with different feature values entered into the frontend.",
        image: "/projects/project-3/prediction-mid.png",
      },
    ],
    tools: [
      "Google Colab",
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "StandardScaler",
      "Boston Housing Dataset",
      "Anvil Works",
      "Anvil Uplink",
      "Neural Network",
    ],
    challenges: [
      {
        problem:
          "I had a hard time configuring Anvil Works again and making sure the frontend inputs connected properly to the notebook function.",
        solution:
          "I double checked the variables, verified the Anvil input and output fields, and added scaler.transform inside the server callable function so the model could receive properly scaled values before predicting.",
      },
      {
        problem:
          "It was also challenging to know which dataset features should be used as inputs for model training.",
        solution:
          "I used the correlation values to identify the strongest features and focused on RM, LSTAT, and PTRATIO because they were more useful for predicting the target price.",
      },
    ],
    reflection:
      "This project helped me improve my bug fixing process because I had to identify where the errors were coming from, especially when connecting Google Colab to Anvil Works. I learned that even if the model works in the notebook, the frontend can still give inaccurate results if the inputs are not prepared the same way as the training data. Adding scaler.transform in the callable function helped me understand why preprocessing is important. I also learned more about choosing features for model training and how selecting the right inputs can affect the quality of predictions.",
  },
  {
    slug: "project-4",
    projectNumber: 4,
    title: "Improving the Boston House Price Prediction Model",
    shortDescription:
      "An improved Boston house price activity that compares the original neural network with early stopping and an extra hidden layer before deploying an upgraded Anvil frontend.",
    overview:
      "While we already created a notebook for Boston house price prediction, it was still possible to test if the model performance could be improved. In this activity, we used the original notebook and modified it to compare three versions: the original model, the original model with early stopping, and early stopping combined with an additional hidden layer. After comparing the models, we found out that the original code had the best performance out of the three. After this, we made an improved Anvil Works frontend for adding house entries and displaying predicted prices.",
    objectives: [
      "Compare the original Boston house price model with optimized versions.",
      "Test early stopping as a way to control model training.",
      "Add another hidden layer and observe if it improves or lowers performance.",
      "Analyze model results using MAE, MSE, RMSE, and R2 score.",
      "Improve the Anvil frontend for saving and displaying prediction entries.",
    ],
    features: [
      "Boston housing dataset used for price prediction.",
      "Original simple neural network model used as the baseline.",
      "Early stopping version that stops training when validation loss stops improving.",
      "Additional hidden layer version used for model comparison.",
      "Metric comparison using MAE, MSE, RMSE, and R2 score.",
      "Improved Anvil Works frontend with add, update, delete, and saved entry functions.",
    ],
    codeSnippets: [
      {
        title: "Original Model Baseline",
        language: "python",
        code: `model = Sequential()
model.add(Dense(16, activation="relu", input_shape=(X_train.shape[1],)))
model.add(Dense(8, activation="relu"))
model.add(Dense(1))

model.compile(optimizer="adam", loss="mse")

history = model.fit(
    X_train,
    y_train,
    validation_split=0.2,
    epochs=300,
    batch_size=16,
    verbose=1,
)`,
        explanation:
          "This was the original model used as the baseline. It became important because after testing the optimized versions, this original setup still gave the best overall performance.",
      },
      {
        title: "Early Stopping With Extra Hidden Layer",
        language: "python",
        code: `model = Sequential()
model.add(Dense(16, activation="relu", input_shape=(X_train.shape[1],)))
model.add(Dense(16, activation="relu"))
model.add(Dense(1))

early_stop = EarlyStopping(
    monitor="val_loss",
    patience=10,
    restore_best_weights=True,
)

history = model.fit(
    X_train,
    y_train,
    epochs=300,
    validation_split=0.2,
    callbacks=[early_stop],
)`,
        explanation:
          "This version added early stopping and another hidden layer. I used this to check if more model changes would improve the results, but the comparison showed that adding more complexity did not automatically make it better.",
      },
      {
        title: "Anvil Functions for Prediction Entries",
        language: "python",
        code: `@anvil.server.callable
def predict_house_price(rm, lstat, ptratio):
    sample_input = np.array([[rm, lstat, ptratio]])
    sample_scaled = scaler.transform(sample_input)
    predicted_price = model.predict(sample_scaled)
    return float(predicted_price[0][0] * 1000)

@anvil.server.callable
def add_entry(entry_data):
    app_tables.entries.add_row(
        title=entry_data.get("house_name", "Unnamed House"),
        content=str(entry_data.get("predicted_price", "")),
        image=entry_data.get("image"),
        created=datetime.now(),
    )`,
        explanation:
          "This part connects the model to the improved Anvil frontend. It predicts the house price, scales the input first, and saves entries with the house name, predicted price, and image.",
      },
    ],
    screenshots: [
      {
        title: "Anvil Homepage",
        description:
          "Shows the improved Anvil Works homepage with a map and saved house prediction entries.",
        image: "/projects/project-4/anvil-homepage.png",
      },
      {
        title: "Original Model Code",
        description:
          "Shows the baseline neural network model that ended up performing best compared with the modified versions.",
        image: "/projects/project-4/original-code.png",
      },
      {
        title: "Model With Early Stopping",
        description:
          "Shows the model version that uses early stopping to stop training when validation loss no longer improves.",
        image: "/projects/project-4/model-early-stopping.png",
      },
      {
        title: "Early Stopping With Extra Hidden Layer",
        description:
          "Shows the modified neural network with an additional hidden layer and early stopping callback.",
        image: "/projects/project-4/early-stopping-extra-layer.png",
      },
      {
        title: "MAE, MSE, and RMSE Comparison",
        description:
          "Compares the error values of the original, early stopping, and extra hidden layer models.",
        image: "/projects/project-4/mae-mse-rmse-comparison.png",
      },
      {
        title: "R2 Score Comparison",
        description:
          "Shows that the original model had the highest R2 score compared with the modified models.",
        image: "/projects/project-4/r2-comparison.png",
      },
      {
        title: "Anvil Backend Functions",
        description:
          "Shows the server callable functions used for prediction, adding entries, retrieving entries, updating entries, and deleting entries.",
        image: "/projects/project-4/anvil-functions.png",
      },
      {
        title: "Sample Result 1",
        description:
          "Shows a sample Anvil entry with a predicted house price after entering RM, LSTAT, and PTRATIO values.",
        image: "/projects/project-4/result-sample-1.png",
      },
      {
        title: "Sample Result 2",
        description:
          "Shows another saved prediction entry from the improved Anvil frontend.",
        image: "/projects/project-4/result-sample-2.png",
      },
      {
        title: "Sample Result 3",
        description:
          "Shows a third prediction result, proving that the frontend can handle different house inputs.",
        image: "/projects/project-4/result-sample-3.png",
      },
    ],
    tools: [
      "Google Colab",
      "Python",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "EarlyStopping",
      "StandardScaler",
      "Boston Housing Dataset",
      "Anvil Works",
      "Anvil Uplink",
      "Anvil Data Tables",
      "Neural Network",
    ],
    challenges: [
      {
        problem:
          "I had a hard time understanding why adding different model features, like early stopping or another hidden layer, did not improve the performance and even made it slightly worse.",
        solution:
          "I compared the models using the actual metrics instead of assuming that more changes would always make the model better. By checking MAE, MSE, RMSE, and R2 score, I was able to see that the original model performed best and that optimization should be based on results, not just added complexity.",
      },
      {
        problem:
          "The improved Anvil frontend also required more backend functions because entries needed to be added, displayed, updated, and deleted.",
        solution:
          "I reviewed each Anvil server callable function one at a time and made sure the prediction, scaling, and database entry fields were connected properly.",
      },
    ],
    reflection:
      "This project helped me understand that improving a model does not always mean adding more features or more layers. I learned that model comparison and analysis are important because the original code can still perform better than the versions with early stopping or extra hidden layers. This activity also helped me practice reading evaluation results instead of relying only on assumptions. I also improved my understanding of Anvil Works because the frontend became more complete, with stored entries and backend functions. Overall, I learned more about testing model changes, identifying performance differences, and using the results to decide which model is actually better.",
  },
  {
    slug: "project-5",
    projectNumber: 5,
    title: "Boston House Price Prediction Streamlit Deployment",
    shortDescription:
      "A Streamlit deployment of the Boston House Price Prediction model where users can enter housing features and receive a predicted price through a simple frontend.",
    overview:
      "Since we already created a Google Colab notebook for the Boston House Price Prediction model, this project focused on saving the trained model and deploying it with Streamlit so users could access a frontend version of the prediction system. We created the needed Python and HTML files, connected them with the saved model, and configured the app so it could run on an available port.",
    objectives: [
      "Save the trained Boston House Price Prediction model for reuse outside the notebook.",
      "Create the Python and HTML files needed for a Streamlit-based frontend.",
      "Load the saved model into the Streamlit app so users can make predictions.",
      "Configure Streamlit to run on an available port and display the prediction result properly.",
    ],
    features: [
      "Boston House dataset used as the base for the prediction model.",
      "Saved Keras model file used for deployment.",
      "Streamlit frontend with input fields for RM, LSTAT, and PTRATIO.",
      "Python and HTML files organized so Streamlit can read the app correctly.",
      "Prediction output displayed directly in the web interface.",
    ],
    codeSnippets: [
      {
        title: "Saving the Trained Model",
        language: "python",
        code: `# Save the trained Boston house price model
model.save("model.h5")`,
        explanation:
          "This is the important step that allowed the trained model to be reused outside Google Colab. By saving it as model.h5, the Streamlit app could load the model later instead of training it again every time.",
      },
      {
        title: "Loading the Model in Streamlit",
        language: "python",
        code: `from tensorflow.keras.models import load_model

model = load_model("model.h5")

# Streamlit inputs can then be passed into the model for prediction.`,
        explanation:
          "This shows the basic idea of connecting the saved model to the Streamlit app. The frontend collects the user inputs, then the loaded model is used to generate the predicted house price.",
      },
    ],
    screenshots: [
      {
        title: "Streamlit Preview",
        description:
          "Preview image used for the project card. The actual project detail page focuses on the finished Streamlit interface.",
        image: "/projects/project-5/streamlit-preview.jpg",
        previewOnly: true,
      },
      {
        title: "Streamlit App Output",
        description:
          "Shows the deployed Streamlit interface where users can enter housing values and view the predicted house price.",
        image: "/projects/project-5/streamlit-screenshot.png",
      },
    ],
    tools: [
      "Google Colab",
      "Python",
      "TensorFlow",
      "Keras",
      "HDF5 / .h5 Model",
      "Streamlit",
      "HTML",
      "Boston House Dataset",
    ],
    challenges: [
      {
        problem:
          "Configuring Streamlit to work properly took the longest time, especially placing the files in the correct hierarchy and making sure the app used an available port.",
        solution:
          "I checked the Streamlit instructions more carefully, moved the deployment to an available port, and asked for help with the proper file placement so Streamlit could read the Python, HTML, and saved model files correctly.",
      },
    ],
    reflection:
      "This project helped me understand why saving a model is important when moving from a notebook to an actual deployed app. Instead of keeping the model only inside Google Colab, I learned how a saved model file can be loaded into another environment and used for predictions. I also gained more experience with Streamlit configuration, especially with file organization and port setup. This made me realize that deployment is not just about the model working, but also about making sure the files, paths, and app settings are arranged properly so users can actually access the system.",
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
