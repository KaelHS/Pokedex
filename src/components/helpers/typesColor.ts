export const typesColor = (type: string) => {

    let color = '';
    
    switch (type) {
        case 'normal':
            color = '#ccc';
            break;
        case 'fighting':
            color = '#087c31';
            break;
        case 'flying':
            color = '#f66ec1';
            break;
        case 'poison':
            color = '#9400d3';
            break;
        case 'ground':
            color = '#743b27';
            break;
        case 'rock':
            color = '#9f9d9b';
            break;
        case 'ghost':
            color = '#5b585c';
            break;
        case 'bug':
            color = '#5fba2f';
            break;
        case 'steel':
            color = '#526874';
            break;
        case 'fire':
            color = '#c04530';
            break;
        case 'water':
            color = '#3c65f3';
            break;
        case 'grass':
            color = '#2fba40';
            break;
        case 'electric':
            color = '#edf00e';
            break;
        case 'psychic':
            color = '#990fe4';
            break;
        case 'ice':
            color = '#0e99df';
            break;
        case 'dragon':
            color = '#ef990f';
            break;
        case 'dark':
            color = '#363636';
            break;
        case 'fairy':
            color = '#73dc78';
            break;
        case 'unknown':
            color = '#ccc';
            break;
        case 'shadow':
            color = '#323232';
            break;
        default:
            color = type;
            break;
    }

    return  color;
}