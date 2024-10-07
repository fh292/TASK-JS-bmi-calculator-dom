function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  const heightM = height/100; 
  var BMI = weight / (heightM^2);
  alert(BMI);

if (BMI<18.5) alert("Underweight");
else if (BMI>18.5 && BMI<24.9) alert("Healthy Weight");
else if (BMI>25.0 && BMI<29.9) alert("Overweight");
else if (BMI>30) alert("Obesity");

}
