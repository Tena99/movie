export default function compare(data, state) {
  if (state) {
    for (let item of state) {
      if (item.id === data) {
        return item.name;
      }
    }
  }
}
