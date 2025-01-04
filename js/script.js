// Countdown Timer
document.addEventListener('DOMContentLoaded', function () {
    const timerElement = document.getElementById('timer');

    // Mengatur waktu target (1 hari dari waktu sekarang)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1); // Tambah 1 hari dari sekarang

    // Fungsi untuk memperbarui timer setiap detik
    function updateTimer() {
        const now = new Date();
        const difference = targetDate - now;

        if (difference > 0) {
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            timerElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
        } else {
            timerElement.textContent = "Promo Berakhir!";
            clearInterval(timerInterval); // Hentikan interval setelah waktu habis
        }
    }

    // Memperbarui timer setiap detik
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Panggil sekali untuk langsung menampilkan waktu awal
});
