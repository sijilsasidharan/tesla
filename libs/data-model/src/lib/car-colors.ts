type CarColorId = 'white' | 'black' | 'blue' | 'silver' | 'red';

type CarColor = {
    id: CarColorId,
    label: string,
    hash: string
};

export  { CarColor, CarColorId };
