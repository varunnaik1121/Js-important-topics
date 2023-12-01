let obj = { seconds: 0, minutes: 0, hours: 0 };
const getDateData = () => {
  const currentDate = Date.now();
  const date1 = new Date(1696286256700);
  const timeTillNow = currentDate - date1;
  console.log(timeTillNow);
  let seconds = Math.floor(timeTillNow / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  obj.seconds = seconds % 60;
  obj.minutes = minutes % 60;
  obj.hours = hours;
  console.log(obj);
};
// setInterval(() => {
//   getDateData();
//   console.log(obj);
// }, 500);
console.log(Date.now());
getDateData();
