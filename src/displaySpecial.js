export default function displaySpecial({ description = 'Описание недоступно', ...rest }) {
  return Object.values(rest).concat([description]);
}
