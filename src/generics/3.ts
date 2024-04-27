// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

function merge<TypeA, TypeB>(objA: TypeA, objB: TypeB): TypeA & TypeB {
  return Object.assign({}, objA, objB);
}
