function hitungBMI() {
  const berat = document.getElementById("berat-badan-input").value;
  const tinggi = document.getElementById("tinggi-input").value;

  if (berat && tinggi) {
    const tinggiMeter = tinggi / 100;
    const bmi = berat / (tinggiMeter * tinggiMeter);

    console.log(berat, tinggi, bmi.toFixed(1));

    let hasilText = "";
    let kategori = "";

    if (bmi < 18.5) {
      kategori = "Kekurangan Berat Badan";
      hasilText = "Anda memiliki berat badan kurang.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      kategori = "Normal (Ideal)";
      hasilText = "Anda memiliki berat badan normal (ideal).";
    } else if (bmi >= 25 && bmi < 29.9) {
      kategori = "Berat Badan Lebih";
      hasilText = "Anda memiliki berat badan berlebih.";
    } else {
      kategori = "Kegemukan (Obesitas)";
      hasilText = "Anda memiliki berat badan kegemukan (obesitas).";
    }

    document.getElementById("hasil").style.display = "block";
    document.getElementById("hasil").innerHTML = `
        <h2>Hasil</h2>
        <div id="hasil">
            <p></p>
        </div>
        <p>Kategori: ${kategori}</p>
        <p>${hasilText}</p>
      `;
  } else {
    alert("Harap masukkan berat dan tinggi badan.");
  }
}
