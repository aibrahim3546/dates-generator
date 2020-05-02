const yearsGenerator = (data = {}) => {
  const presentDay = new Date();
  const { from = presentDay.getFullYear() - 10, to = presentDay.getFullYear() } = data;
  const years = [];

  for (let i = from; i < to + 1; i += 1) {
    years.push(i);
  }

  return years;
};

module.exports = yearsGenerator;