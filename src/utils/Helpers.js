const getByKey = (array, key) => {
    return array.find((ele) => ele.id === +key);
};

export { getByKey };
