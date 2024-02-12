export default function specials(character) {
  const massive = [];
  for (const stat of character.special) {
    let {
      id, name, description, icon,
    } = stat;
    if (description === undefined) {
      description = 'Описание недоступно';
    }
    massive.push({
      id, name, description, icon,
    });
  }
  return massive;
}
