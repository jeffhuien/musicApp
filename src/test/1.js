let a = {
  name: "13",
  age: 12,
};

let u = "";
for (const i in a) {
  u += `${i}=${a[i]}&`;
}
u = u.substring(0, u.length - 1);
console.log(u);
