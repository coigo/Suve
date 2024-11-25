export function sortByKey(key: string, array: any[], low = 0, high = array.length - 1): any[] {
    if (low < high) {
        const pivot = partition(key, array, low, high);
        sortByKey(key, array, low, pivot - 1);
        sortByKey(key, array, pivot + 1, high);
    }
    return array;
}

function partition(key: string, array: any[], low: number, high: number): number {
    const pivotValue = array[high][key]; 
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j][key] < pivotValue) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1; 
}

export function getRandomValues(array: any[], ammount: number) {
    const used: number[] = []
    const result: any[] = []
    for (let i = 0; i < ammount; i++) {
        const random = Math.floor(Math.random() * ammount)
        
        if (!used.find(u => u == random)) {
            result.push(array[random])
            used.push(random)
        }
    }
    console.log(used)
    return result
}