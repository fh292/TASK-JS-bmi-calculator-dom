function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  const heightM = height / 100;
  const BMI = weight / Math.pow(heightM, 2);
  alert(BMI);

  if (age >= 19 && age <= 24) {
    if (BMI < 19) {
      alert("Not Healthy (Underweight)");
    } else if (BMI <= 24) {
      alert("Healthy Weight");
    } else {
      alert("Not Healthy");
    }
  } else if (age >= 25 && age <= 34) {
    if (BMI < 20) {
      alert("Not Healthy (Underweight)");
    } else if (BMI <= 25) {
      alert("Healthy Weight");
    } else {
      alert("Not Healthy");
    }
  } else if (age >= 35 && age <= 44) {
    if (BMI < 21) {
      alert("Not Healthy (Underweight)");
    } else if (BMI <= 26) {
      alert("Healthy Weight");
    } else {
      alert("Not Healthy");
    }
  } else if (age >= 45 && age <= 54) {
    if (BMI < 22) {
      alert("Not Healthy (Underweight)");
    } else if (BMI <= 27) {
      alert("Healthy Weight");
    } else {
      alert("Not Healthy");
    }
  } else if (age >= 55 && age <= 64) {
    if (BMI < 23) {
      alert("Not Healthy (Underweight)");
    } else if (BMI <= 28) {
      alert("Healthy Weight");
    } else {
      alert("Not Healthy");
    }
  } else if (age >= 65) {
    if (BMI < 24) {
      alert("Not Healthy (Underweight)");
    } else if (BMI <= 29) {
      alert("Healthy Weight");
    } else {
      alert("Not Healthy");
    }
  }
}
