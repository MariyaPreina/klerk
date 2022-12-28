export function plural(num, postfixes) {
    if (!num) {
        console.warn('[plural] Wrong Number ', num);
        return '';
    }

    let n = Math.abs(num);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return postfixes[2];
    }
    n %= 10;
    if (n === 1) {
        return postfixes[0];
    }
    if (n >= 2 && n <= 4) {
        return postfixes[1];
    }
    return postfixes[2];
}

export function splitThousands(num, separator = ' ') {
    if (typeof num !== 'number' && !Number.isNaN(num)) {
        console.warn(
            '[Utils/roundToMillions] Аргумент "num" должен быть Number: ',
            num
        );
        return '';
    }
    const tmp = num.toString().split('.');
    let value = tmp[0]
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    if (Number(tmp[1])) {
        value += `.${tmp[1]}`;
    }
    return value;
}
