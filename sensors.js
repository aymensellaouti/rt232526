const sensors = [
    { id: "TEMP_01", type: "temperature", value: 22.5, status: "active" },
    { id: "POLL_01", type: "pollution", value: 85, status: "active" },
    { id: "HUM_01", type: "humidity", value: 45, status: "inactive" },
    { id: "TEMP_02", type: "temperature", value: 31.0, status: "active" },
    { id: "POLL_02", type: "pollution", value: 42, status: "active" },
    { id: "TEMP_03", type: "temperature", value: -5.0, status: "faulty" }
]; 

// Calculer la température moyenne de tous les capteurs de type "temperature" 
// (uniquement ceux qui ne sont pas "faulty").
const temperatureSensors = sensors.filter(
    sensor => sensor.type === "temperature" && sensor.status !== "faulty"
);

sensors.forEach((sensor, index) => {
    console.log(`Sensor ${index}: ${sensor.id}, Type: ${sensor.type}, Value: ${sensor.value}, Status: ${sensor.status}`);
});
console.log(temperatureSensors);
const averageTemperature = temperatureSensors.reduce(
        (sum, sensor) => sum + sensor.value, 0
    ) / temperatureSensors.length;
console.log(averageTemperature);
