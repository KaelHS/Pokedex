export const formattedAttributes = (attribute: string) => {

    let attributeTextFormatted = '';
    let color = '';
    
    switch (attribute) {
        case 'hp':
            attributeTextFormatted = 'HP';
            color = '#F44336';
            break;
        case 'attack':
            attributeTextFormatted = 'ATK';
            color = '#FF8310';
            break;
        case 'defense':
            attributeTextFormatted = 'DEF';
            color = '#ebcd23';
            break;
        case 'special-attack':
            attributeTextFormatted = 'SP. ATK';
            color = '#4c4cee';
            break;
        case 'special-defense':
            attributeTextFormatted = 'SP. DEF';
            color = '#5ebd6b';
            break;
        case 'speed':
            attributeTextFormatted = 'SPEED';
            color = '#FF78CB';
            break;
        default:
            attributeTextFormatted = attribute;
            break;
    }

    return  {
        attributeTextFormatted,
        color
    }
}