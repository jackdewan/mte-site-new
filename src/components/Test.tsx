const things = ["hello", "there", "sir"];

export const Test = () => {
  return (
    <div className="bg-white min-h-screen p-10 text-2xl ">
      <div>
        <ul className="space-y-10">
          {things.map((thing) => (
            <li className="hover:text-aqua-500">Hello</li>
          ))}
        </ul>
        <div className="min-h-[4rem bg-gray-500">Content</div>
      </div>
    </div>
  );
};
