import { displayBookingTable } from './BookingAll.js';
import { createBookingForm } from './addBooking.js'

let CurrentBookingListTable = 1;
let CurrentBookingHistoryTable = 1;

// Fungsi untuk mengambil data Booking dari API
function fetchGetDataBooking() {
    const url = 'http://localhost/BEPLAZA/API/api.php/booking';

    fetch(url)
    .then(response => response.json())
    .then(data => {

        // Panggil fungsi pertama kali untuk menampilkan data awal untuk masing-masing tabel
        // BookingListTable(data, 0);
        // BookingHistoryTable(data, 0);
        displayBookingTable(data, 0, 'apply');
        displayBookingTable(data, 0, 'edit');
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });
}

function resetTable() {
    CurrentBookingListTable = 1; // Variabel untuk melacak halaman saat ini untuk tabel pertama
    CurrentBookingHistoryTable = 1;
    fetchGetDataBooking();
}

fetchGetDataBooking();
createBookingForm();

export {resetTable};