import Link from 'next/link';
function Button({children, href, ...rest}) {
  return (
    <Link href={href}>
      <a {...rest} className="inline-block rounded-full px-2 py-2 md:px-10 md:py-4 text-white bg-blue font-normal md:font-extrabold">{children}</a>
    </Link>
  )
}

export default Button
