// 代码的可读性，函数的命名应该解释函数的功能
function generateRandomGender() {
//   return Math.random() > 0.5? 'male' : 'female';
  const genders = ['male', 'female'];
  return genders[Math.floor(Math.random() * genders.length)]
}