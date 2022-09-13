export default function displaySpecial(objSpecial) {
  const {
    id, name, icon, description = 'Описание недоступно',
  } = objSpecial;
  return [id, name, icon, description];
}
