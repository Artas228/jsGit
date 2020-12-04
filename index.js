/* find nth largest salary */
/* given an unsorted array of employee objects */
const emplArray = [
    { id: 1034, salary: 1000 },
    { id: 2345, salary: 4000 },
    { id: 2934, salary: 1500 },
    { id: 2685, salary: 4500 },
    { id: 1234, salary: 1500 },
    { id: 2567, salary: 4000 },
  ];
  // I want to get employees with 2nd biggest salary, so the result:
  // [  { id: 2345, salary: 4000 }, { id: 2567, salary: 4000 } ]
  /* find nth largest salary */
  // 1. get sorted array of unique salaries
  const getUnique = (arr, key) => {
    return arr
      .map((item) => item[key]) // [ 1000, 4000, 1500, 4500, 1500, 4000]
      .filter((value, index, self) => self.indexOf(value) === index) // [ 1000, 4000, 1500, 4500]
      .sort() // [1000, 1500, 4500]
      .reverse(); // [4500, 1500, 1000]
  };
  // list = list.filter((x, i, a) => a.indexOf(x) === i) - get new array with unique values
  // 2.get array of objects grouped by some value
  const groupBy = (arr1, arr2, key) => {
    let res = [];
    arr1.forEach((element) => {
      var result = arr2.reduce(function (acc, current) {
        if (current[key] === element) {
          // 4500
          acc.push(current);
        }
        return acc;
      }, []);
      res.push(result);
    });
    return res;
  };
  // get nth largest  salaries
  const getNthLargestVal = (arr, n) => {
    console.log(arr[n - 1]);
  };
  const uniqueSalaries = getUnique(emplArray, "salary");
  const groupedArr = groupBy(uniqueSalaries, emplArray, "salary");
  console.log("FIRST method", groupedArr[1]);
  // group array of objects by some value (using reduce)
  const groupWithReduce = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  const convertToArr = (obj) => Object.keys(obj).map((key) => obj[key]);
  const tempRes = groupWithReduce(emplArray, "salary");
  console.log("temp", tempRes);
  console.log("SECOND method", convertToArr(tempRes));