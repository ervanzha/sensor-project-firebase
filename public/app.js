const firebaseConfig = {
  apiKey: "AIzaSyA...",
  authDomain: "sensorproject.firebaseapp.com",
  databaseURL: "https://sensorproject.firebaseio.com",
  projectId: "sensorproject",
  storageBucket: "sensorproject.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123..."
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref('/sensors').on('value', (snapshot) => {
  const data = snapshot.val();
  
  // Update Suhu
  document.getElementById("suhu").innerHTML = `${data.suhu}°C`;
  
  // Konversi kelembaban tanah ke persen (contoh: ESP32 ADC 12-bit)
  const soilValue = data.kelembaban_tanah;
  const soilPercent = 100 - Math.round((soilValue / 4095) * 100); // 0% = kering, 100% = basah
  document.getElementById("kelembaban").innerHTML = `${soilPercent}%`;
});