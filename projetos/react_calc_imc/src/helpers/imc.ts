export type Level = {
    title: string;
    color: string;
    icon: 'up' | 'down';
    imc: number[];
    yourImc?: number;
}

export const levels: Level[] = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [31.1, 99] }
];

export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height * height);
    console.log(imc);
    for(let i in levels) {
        if(parseFloat(imc.toFixed(1)) >= levels[i].imc[0] && parseFloat(imc.toFixed(1)) <= levels[i].imc[1]) {
            let levelCopy: Level = {...levels[i]};
            levelCopy.yourImc = parseFloat(imc.toFixed(2));               
            return levelCopy;
           }
    }

    return null;
}