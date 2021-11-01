export default function getSpecifications({ special }) {
  const arr = [];
  special.forEach((elem) => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = elem;
    arr.push({
      id, name, icon, description,
    });
  });

  return arr;
}
