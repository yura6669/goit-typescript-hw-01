console.log('------------------- Generic Task 2 -------------------');

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<
  T extends keyof AllType,
  U extends keyof AllType
>(
  top: Pick<AllType, T>,
  bottom: Pick<AllType, U>
): AllType {
  return {
    name: (top as Partial<AllType>).name!,
    color: (top as Partial<AllType>).color!,
    position: (bottom as Partial<AllType>).position!,
    weight: (bottom as Partial<AllType>).weight!,
  };
}

const top = {
    name: 'Yurii',
    color: 'blue',
};

const bottom = {
    position: 1,
    weight: 2,
};

const result = compare(top, bottom);
console.log(result);