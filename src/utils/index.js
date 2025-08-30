export const getRandomBG = () => {
    const colors = [
        '#f6b100',
        '#025cca',
        '#2e4a40',
        '#664a04'
    ];
    // Pick a random color from the array
    const color = colors[Math.floor(Math.random() * colors.length)];
    return "bg-[" + color + "]"; // Return the color with the bg-[] format
};