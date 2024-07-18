function hitungBMI() {
  const berat = document.getElementById("berat-badan-input").value;
  const tinggi = document.getElementById("tinggi-input").value;

  if (berat && tinggi) {
    const tinggiMeter = tinggi / 100;
    let bmi = berat / (tinggiMeter * tinggiMeter);
    bmi = parseFloat(bmi.toFixed(1));

    console.log(berat, tinggi, bmi);

    let hasilText = "";
    let kategori = "";
    let hasilBMI = "";
    let info1 = "";
    let info2 = "";
    let info3 = "";
    let info4 = "";
    let penyakit = "";
    let penyakit1 = "";
    let penyakit2 = "";
    let penyakit3 = "";
    let penyakit4 = "";

    if (bmi < 18.5) {
      kategori = "Kekurangan Berat Badan";
      hasilText = "Anda memiliki berat badan kurang.";
      hasilBMI = "Hasil BMI kurang dari 18.5";
      info1 =
        "Anda berada dalam kategori underweight atau kekurangan berat badan.";
      info2 =
        "Cara terbaik untuk meningkatkan berat badan adalah dengan meningkatkan asupan kalori dan nutrisi yang seimbang.";
      info3 =
        "Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk meningkatkan berat badan hingga batas normal.";
      info4 =
        "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan risiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai risiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
      penyakit =
        "Beberapa masalah kesehatan yang terkait dengan kekurangan berat badan:";
      penyakit1 = "Malnutrisi";
      penyakit2 = "Anemia";
      penyakit3 = "Osteoporosis";
      penyakit4 = "Gangguan sistem imun";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      kategori = "Normal (Ideal)";
      hasilText = "Anda memiliki berat badan normal (ideal).";
      hasilBMI = "Hasil BMI diantara 18.5 hingga 24.9";
      info1 =
        "Selamat! Anda berada dalam kategori berat badan normal atau ideal. Pertahankan pola hidup sehat dengan menjaga pola makan seimbang dan berolahraga secara teratur.";
      info4 =
        "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan risiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai risiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
      penyakit = "Tips Menjaga Berat Badan Ideal:";
      penyakit1 = "Konsumsi makanan bergizi seimbang.";
      penyakit2 = "Berolahraga secara teratur.";
      penyakit3 = "Hindari makanan olahan dan tinggi gula.";
      penyakit4 = "Cukup tidur dan kelola stres dengan baik.";
    } else if (bmi >= 25 && bmi < 29.9) {
      kategori = "Berat Badan Berebih";
      hasilText = "Anda memiliki berat badan berlebih.";
      hasilBMI = "Hasil BMI diantara 25 hingga 29.9";
      info1 =
        "Anda berada dalam kategori overweight atau berat badan berlebih.";
      info2 =
        "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.";
      info3 =
        "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
      info4 =
        "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
      penyakit = "Beberapa penyakit yang berasal dari kegemukan:";
      penyakit1 = "Diabetes";
      penyakit2 = "Hipertensi";
      penyakit3 = "Sakit Jantung";
      penyakit4 = "Osteoarthritis";
    } else {
      kategori = "Kegemukan (Obesitas)";
      hasilText = "Anda memiliki berat badan kegemukan (obesitas).";
      hasilBMI = "Hasil BMI 30 atau lebih";
      info1 = "Anda berada dalam kategori obesitas.";
      info2 =
        "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi, berolahraga secara teratur, dan berkonsultasi dengan ahli gizi untuk mendapatkan rencana diet yang tepat.";
      info3 =
        "Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
      info4 =
        "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan risiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai risiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
      penyakit = "Beberapa penyakit yang berasal dari obesitas:";
      penyakit1 = "Diabetes tipe 2";
      penyakit2 = "Penyakit jantung";
      penyakit3 = "Hipertensi";
      penyakit4 = "Stroke";
    }

    // document.getElementById("hasil").style.display = "block";
    document.getElementById("hasil").innerHTML = `
        <h2>Hasil</h2>
        <div id="hasil-bmi">
          <p>${kategori}</p>
          <p id="angka">${bmi}</p>
          <p>${hasilText}</p>
          <button>Download Hasil BMI</button>
        </div>
        <p>${hasilBMI}</p>
        <div>
          <p>
            ${info1}
          </p>
          <p>
          ${info2}
          </p>
          <p>
          ${info3}
          </p>
        </div>
        <div class="konsul">
          <button>Konsultasi Ahli Gizi Via Aplikasi</button>
          <button>Registrasi Online Ahli Gizi</button>
        </div>

        <div>
          <p>
             ${info4}
          </p>
        </div>

        <div id="penyakit">
          <p>${penyakit}</p>
          <div id="penyakit-disebabkan">
            <p>${penyakit1}</p>
            <p>${penyakit2}</p>
            <p>${penyakit3}</p>
            <p>${penyakit4}</p>
          </div>
          <div class="konsul">
            <button>Konsultasi Dokter Via Aplikasi</button>
            <button>Registrasi Online Sekarang</button>
          </div>
        </div>
        <div id="download-app">
          <p>download aplikasi</p>
          <img src="assets/downloadapp.webp" alt="" />
        </div>
      `;
  } else {
    alert("Harap masukkan berat dan tinggi badan.");
  }
}
