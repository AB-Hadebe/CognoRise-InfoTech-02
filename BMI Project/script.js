function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    const gender = document.getElementById('gender').value;

    if (isNaN(weight) || isNaN(height) || height === 0) {
        document.getElementById('result').textContent = "Please enter valid values for weight and height.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
    let scalePosition = 0;

    if (bmi < 18.5) {
        category = 'Underweight';
        scalePosition = 0;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        scalePosition = 25;
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        scalePosition = 50;
    } else {
        category = 'Obesity';
        scalePosition = 75;
    }

    document.getElementById('result').textContent = `Your BMI is ${bmi}. You are classified as ${category}.`;
    document.getElementById('bmiIndicator').style.left = `calc(${scalePosition}% - 1px)`;
}
