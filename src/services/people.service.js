const getAll = () => {
  const mockResult = [
    {
      id: 1,
      name: 'John Doe',
    }
  ]

  return Promise.resolve(mockResult);
};

module.exports = {
  getAll,
};
