export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);

  function* generator() {
    for (let department of departments) {
      yield* department;
    }
  }

  return {
    [Symbol.iterator]: generator
  };
}

