let arr1 = [
    {
      Name: 'cuong ngu',
      Age: 10,
    },
    {
      Name: 'ha sua',
      Age: 19,
    },
     {
      Name: 'duc ngu',
      Age: 20,
    }
  ];
 
 
  let arr2 = arr1.findIndex((value) => {
    return value.Age > 12
  })
  console.log(arr1)
  console.log(arr2)