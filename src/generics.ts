/*const names: Array<string> = []; // odpovídá const names = string[];
//names[0].split(' ');

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(()=> {
        resolve('This is done!')
    }, 2000);
});*/

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA!, objB);
}

const mergeObj = merge({name: 'Max', hobbies: ['Sport']}, {age: 30});
const mergeObj2 = merge<{name: string}, {age: number}>({name: 'Max'}, {age: 30});

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.'; 
    } else if (element.length > 1) {
        descriptionText = 'Got '+ element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'Dana'}, 'name'));

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Dana');
textStorage.addItem('Idaho');
console.log(textStorage.getItems());
textStorage.removeItem('Dana');
console.log(textStorage.getItems());
