let students=[
    {
        'Name' : 'quý khôn ',
        'Age' : 20
    },
    {
        'Name': 'Hà sữa',
        'Age' : 19
    },
    {
        'Name':' cường ngu',
        'Age': 18
    }
];
let max=0;
let index =0;
for(let i in students)
{
    if(parseInt( students[i]) >max)
    {
        max=i;
    }
};
console.log(students[max])
