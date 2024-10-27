// app.js

// Function to display the selected tab // JavaScript for handling tabs and footprint calculations

// Function to show the selected tab content
function showTab(tabId) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";  // Clear previous content

    if (tabId === 'personal') {
        contentDiv.innerHTML = `
            <div>
                <h2>Personal Information</h2>
                 <div>
                <label for="height">Height (cm):</label>
               
               
                <input type="number" id="height" name="height" min="0" max="251">
                </div>
                <div>
                <label for="weight">Weight (kg):</label>
                <input type="number" id="weight" name="weight" min="0" max="250">
                 </div>
                  <div>
                 <label for="gender">Gender:</label>
        <select id="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </div>
    <div>
        <label for="diet">Diet:</label>
        <select id="diet" required>
            <option value="omnivore">Omnivore</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
        </select>
</div>
<div>
        <label for="social_activity">Social Activity:</label>
        <select id="social_activity" required>
            <option value="never">Never</option>
            <option value="sometimes">Sometimes</option>
            <option value="always">Always</option>
        </select>
    </div>
        `;
    } else if (tabId === 'travel') {
        contentDiv.innerHTML = `
            <div>
                <h2>Travel Information</h2>
                <div>
                    <label for="transportation">Transportation:</label>
                    <select id="transportation" required>
                        <option value="public">public</option>
                        <option value="private">private</option>
                        <option value="walk/bicycle">walk/bicycle</option>
                    </select>
                    </div>
                
                <div class="slider-container">
                    <label for="car_usage">Car Usage (km per year):</label>
                    <input type="range" id="car_usage" name="car_usage" min="0" max="5500" step="10" value="0" oninput="this.nextElementSibling.value = this.value">
                    <output>0</output> km
                </div>
                <div >
                    <label for="car_type">Car Type:</label>
                    <select id="car_type" required>
                        <option value="electric">Electric</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="gasoline">Gasoline</option>
                        <option value= "petrol">Petrol</option>
                    </select>
                </div>
                <div>
                <label >How often do you fly ?</label>
                <select id="flight_frequency" required>
                <option value="never">Never</option>
                <option value="sometimes">Sometimes</option>
                <option value="often">Often</option>
                </select>
                </div>
            </div>`;
    }
    else if (tabId === 'waste') {
        contentDiv.innerHTML = `
            <div>
                <div>
                <h2>Waste Information</h2>
                <label for="recycling">Recycling Participation (1-5 scale):</label>
                <input type="number" id="recycling" name="recycling" min="1" max="5">
                </div>
                <div>
                <label for="waste-size">What is the size of your waste bag</label>
                <select id="bag_size" required>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                </select>
                </div>
            </div>`;
    }
    else if (tabId === 'energy') {
        contentDiv.innerHTML = `
            <div>
                <h2>Energy Usage</h2>
                <div >
                    <label for="power_type">Source type for heating</label>
                    <select id="power_type" required>
                        <option value="natural gas">Natural gas</option>
                        <option value="hybrid">Wood</option>
                        <option value="electricity">Electricity</option>
                    </select>
                </div>
                <div>
                <label>Time Spend On Using Internet (0 - 24 hrs)</label>
                 <input type="range" id="time_spend" name="time spend on using internet" min="0" max="24" step="1" value="0" oninput="this.nextElementSibling.value = this.value">
                </div>
                <label>Time Spend On Using TV (0 - 24 hrs)</label>
<input type="range" id="time_spend2" name="time spend on Internet" min="0" max="24" step="1" value="0" oninput="this.nextElementSibling.value = this.value">
    </div>
                
            </div>`;
    } 
    else if (tabId === 'consumption') {
        contentDiv.innerHTML = `
            <div>
                <h2>Consumption Information</h2>
                <div >
                    <label for="shower_type">Frequence of Shower</label>
                    <select id="shower" required>
                        <option value="frequently">Frequently</option>
                        <option value="less frequently">Less frequently</option>
                    </select>
                </div>
                <div>
                 <label>Monthly Cloth Spend (₹) [0-40000] </label>
                <input type="range" id="time_spend3" name="spend3" min="0" max="10000" step="100" value="0" oninput="this.nextElementSibling.value = this.value">
                </div>
        
                <div>
                     <label>Monthly Grocery Spend (₹) [0-20000] (</label>
                    <input type="range" id="time_spend4" name="spend4" min="0" max="10000" step="100" value="0" oninput="this.nextElementSibling.value = this.value">
                    </div>
            </div>`;
    }
}



function calculateFootprint() {
    let footprint = 0;

    // Personal Information
    const weight = document.getElementById("weight") ? parseFloat(document.getElementById("weight").value) : 0;
    const diet = document.getElementById("diet") ? document.getElementById("diet").value : null;
    if (weight) {
        footprint += weight * 0.2; 
    }
    if (diet === "omnivore") {
        footprint += 2.5;
    } else if (diet === "vegetarian") {
        footprint += 1.7;
    } else if (diet === "vegan") {
        footprint += 1.0;
    }

    const carUsage = document.getElementById("car_usage") ? parseFloat(document.getElementById("car_usage").value) : 0;
    const carType = document.getElementById("car_type") ? document.getElementById("car_type").value : null;
    const flightFrequency = document.getElementById("flight_frequency") ? document.getElementById("flight_frequency").value : null;
    if (carUsage) {
        let carMultiplier = 0.2; // Base for gasoline or petrol
        if (carType === "electric") carMultiplier = 0.1;
        else if (carType === "hybrid") carMultiplier = 0.15;
        footprint += carUsage * carMultiplier;
    }
    if (flightFrequency === "sometimes") {
        footprint += 1000;
    } else if (flightFrequency === "often") {
        footprint += 3000;
    } 
     const recycling = document.getElementById("recycling") ? parseInt(document.getElementById("recycling").value) : 3;
     const bagSize = document.getElementById("bag_size") ? document.getElementById("bag_size").value : null;
     if (recycling) {
         footprint -= recycling * 50; // Deduct footprint for recycling effort (example value)
     }
     if (bagSize === "medium") {
         footprint += 100;
     } else if (bagSize === "large") {
         footprint += 200;
     }
    // Energy Usage
    const powerType = document.getElementById("power_type") ? document.getElementById("power_type").value : null;
    const timeInternet = document.getElementById("time_spend") ? parseInt(document.getElementById("time_spend").value) : 0;
    const timeTV = document.getElementById("time_spend2") ? parseInt(document.getElementById("time_spend2").value) : 0;
    if (powerType === "natural gas") {
        footprint += 500;
    } else if (powerType === "electricity") {
        footprint += 300;
    }
    footprint += timeInternet * 2 + timeTV * 1.5; // Example usage multipliers for internet and TV time

    // Consumption Information
    const clothSpend = document.getElementById("time_spend3") ? parseInt(document.getElementById("time_spend3").value) : 0;
    const grocerySpend = document.getElementById("time_spend4") ? parseInt(document.getElementById("time_spend4").value) : 0;
    footprint += (clothSpend * 0.03) + (grocerySpend * 0.02); // Example multipliers for monthly spends
      document.getElementById("result").textContent = `Estimated Carbon Footprint: ${footprint.toFixed(2)} kg CO2/year`;
}

