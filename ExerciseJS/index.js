const categories = [
    {
        name: 'category1',
        subcategories: [
            {
                name: 'category2',
                subcategories: []
            },
            {
                name: 'category3',
                subcategories: [
                    {
                        name: 'category4',
                        subcategories: []
                    }
                ]
            }
        ]
    },
    {
        name: 'category5',
        subcategories: []
    }
];

// TO-DO: Implement this function
const getCategoryPath = (categories, name, path) => {
		if (!path){path= '';}
    for (let cat of categories) {
        if (name === cat.name){
            return path + '/' + cat.name;
        } else {
            const tmpPath = path + '/' + cat.name;
            const res = getCategoryPath(cat.subcategories, name, tmpPath);
            if (res) {
                return res;
            }
        }
    }
    return null;
};

// OUTPUT SAMPLES
console.log(getCategoryPath(categories, 'category4')); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, 'category2')); // should output: '/category1/category2'
console.log(getCategoryPath(categories, 'category5')); // should output: '/category5'