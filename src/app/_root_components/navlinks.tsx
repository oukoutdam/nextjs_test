import Link from 'next/link';

const links = [
  {
    linkname:"About",
    linkhref:"/about"
  },
  {
    linkname:"Contact",
    linkhref:"/contact"
  } 
]

export default function NavLinks() {
  return (
    <div className="flex flex-row justify-end gap-5">
      {links.map((link) => (
        <Link
        href={link.linkhref}
        key={link.linkname}>
          {link.linkname}
        </Link>
      ))}
    </div>
  );
}




