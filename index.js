const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arr, func) => {
  const res = [];
  if (func(arr)) {
    res.push(func(arr));
  }
  return res;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (data) => {
  const res = data.sort();
  const hasil = [];
  for (let i = 0; i < res.length; i++) {
    hasil.push((i + ". " + res[i]).toString());
  }
  return hasil;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (data) => {
  const res = data.sort().reverse();
  const hasil = [];
  for (let i = 0; i < res.length; i++) {
    hasil.push((i + ". " + res[i]).toString());
  }
  return hasil;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
