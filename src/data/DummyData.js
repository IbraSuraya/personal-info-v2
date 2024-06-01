export const historyNotif = [
  {
    id: 1,
    title: "Judul Dummy 1",
    href: "/",
    isRead: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem. At imperdiet dui accumsan sit amet. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Eget duis at tellus at.",
    datetime: new Date('2024-06-10T10:30:00'),
  },
  {
    id: 2,
    title: "Judul Dummy 2",
    href: "/",
    isRead: false,
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    datetime: new Date('2024-06-10T11:45:00'),
  },
  {
    id: 3,
    title: "Judul Dummy 3",
    href: "/",
    isRead: false,
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
    datetime: new Date('2024-06-10T14:20:00'),
  },
  {
    id: 4,
    title: "Judul Dummy 4",
    href: "/",
    isRead: false,
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    datetime: new Date('2024-06-10T15:55:00'),
  },
];

// Mendefinisikan fungsi untuk menghasilkan tanggal acak antara dua tanggal tertentu
function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Menentukan rentang tanggal yang diinginkan
const startDate = new Date('2024-06-01T00:00:00');
const endDate = new Date('2024-06-30T23:59:59');

// Menetapkan nilai acak untuk properti datetime pada setiap objek dalam array historyNotif
historyNotif.forEach(item => {
  item.datetime = getRandomDate(startDate, endDate);
});