from openai import OpenAI
import numpy as np
import matplotlib.pyplot as plt
import argparse

# Parse command-line arguments for the API key
parser = argparse.ArgumentParser(description="Evaluate OpenAI GPT-4 Omni's summation accuracy.")
parser.add_argument("--api_key", required=True, help="Your OpenAI API key.")
args = parser.parse_args()

# Set the OpenAI API key
client = OpenAI(
    api_key = args.api_key
)

# Function to query OpenAI API for the sum of two numbers using GPT-4 Omni
def get_sum_from_api(num1, num2):
    prompt = f"{num1}+{num2}="
    try:
        response = client.chat.completions.create
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "You are a calculator. You do not provide anything except a pure numerical response. There will be no words of any kind in your answer, the only allowed response tokens are (1) numbers, and (2) symbols used in the question."},
                {"role": "user", "content": prompt}
            ]
        )
        # Extract the response text and parse it to float
        answer = response['choices'][0]['message']['content'].strip()
        print(f"debug: response was: \"{answer}\"")
        return float(answer)
    except Exception:
        return None

# Initialize parameters
num_examples = 1
max_value = 1e9
values_a = np.random.uniform(1, max_value, num_examples)  # Random numbers between 1 and 1,000,000
values_b = np.random.uniform(1, max_value, num_examples)  # Random numbers between 1 and 1,000,000
strict_equal = []
percentage_errors = []

# Loop through the examples and test accuracy
for a, b in zip(values_a, values_b):
    true_sum = a + b
    api_sum = get_sum_from_api(a, b)
    
    if api_sum is not None:
        # Calculate strict equality
        strict_equal.append(api_sum == true_sum)
        
        # Calculate percentage error
        error = abs((api_sum - true_sum) / true_sum) * 100
        percentage_errors.append(error)
    else:
        strict_equal.append(False)
        percentage_errors.append(None)

# Normalize percentage errors (ignoring None values)
filtered_errors = [e for e in percentage_errors if e is not None]
normalized_errors = np.array(filtered_errors) / max(filtered_errors)

# Create a 2D grid for plotting
log_values_a = np.log10(values_a)
log_values_b = np.log10(values_b)
heatmap, xedges, yedges = np.histogram2d(
    log_values_a, log_values_b, bins=50, weights=normalized_errors[:len(log_values_a)]
)

# Plot the results
plt.figure(figsize=(10, 8))
plt.imshow(
    heatmap.T, origin="lower",
    extent=[xedges[0], xedges[-1], yedges[0], yedges[-1]],
    cmap="hot", aspect="auto"
)
plt.colorbar(label="Normalized Percentage Error")
plt.xlabel("log(Value A)")
plt.ylabel("log(Value B)")
plt.title("Summation Error Heatmap (GPT-4o)")
plt.show()
