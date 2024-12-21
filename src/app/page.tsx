import NavLinks from '@/app/_root_components/navlinks';

export default function Home() {
  return (
    <>
      <NavLinks />
      <h1>Hello World</h1>
      <p>Hello, my name is Ouk Outdam and I am studying Computer Science in Japan!</p>
      <p>Here are my skills</p>
      <ul className="list-disc ml-4">
        <li>Python</li>
        <li>Java</li>
        <li>C</li>
        <li>HTML, CSS, Javascript</li>
      </ul>
    </>
  );
}
