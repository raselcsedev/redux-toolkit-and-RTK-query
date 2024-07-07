import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Users from "./components/Users";

export default function App() {
  console.log("Hey I am building ....");

  return (
    <div className="flex h-screen pt-20 justify-center items-start p-6 bg-blue-200">
      <div className="p-4">
        <div className="p-4">

        <Counter />
        </div>
        <div className="p-4">

        <Todo />
        </div>
      </div>
      <div className="h-80 overflow-auto">

      <Users />
      </div>

    </div>
  );
}
