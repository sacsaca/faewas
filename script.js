document.addEventListener("DOMContentLoaded", function () {
    const bookingData = JSON.parse(localStorage.getItem("bookingData"));
    if (bookingData) {
        const nomorBooking = "BB" + new Date().getTime(); // Nomor Booking unik
        const hargaPerJam = 50000; // Contoh harga per jam
        const totalHarga = hargaPerJam * parseInt(bookingData.jumlahLapangan || 1);

        document.getElementById("detailBooking").innerText = `
            Tanggal: ${bookingData.tanggal}
            Jenis Tiket: ${bookingData.jenisTiket}
            Catatan: ${bookingData.catatan}
        `;
        document.getElementById("totalHarga").innerText = "Rp " + totalHarga.toLocaleString("id-ID");
        document.getElementById("nomorBooking").innerText = nomorBooking;
    } else {
        alert("Tidak ada data booking ditemukan!");
    }
});
