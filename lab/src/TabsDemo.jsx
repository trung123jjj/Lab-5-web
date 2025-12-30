import Tabs from './Tabs';

export default function TabsDemo() {
  return (
    <Tabs defaultIndex={0}>
      <Tabs.List>
        <Tabs.Tab index={0}>React</Tabs.Tab>
        <Tabs.Tab index={1}>Redux</Tabs.Tab>
      </Tabs.List>

      <div className="divider">
        <hr />
      </div>

      <Tabs.Panel index={0}>
        React is a library for building user interfaces.
      </Tabs.Panel>

      <Tabs.Panel index={1}>
        Redux is a predictable state container.
      </Tabs.Panel>
    </Tabs>
  );
}
