import Costs from './components/Costs/Costs';

export const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amount: 999.99,
    },
    {
      date: new Date(2021, 11, 25),
      description: 'MacBook',
      amount: 1254.72,
    },
    {
      date: new Date(2021, 11, 25),
      description: 'Джинси',
      amount: 49.99,
    },
  ];

  return (
    <div>
      <h1>React homework template</h1>
      <Costs costs={costs} />
    </div>
  );
};
