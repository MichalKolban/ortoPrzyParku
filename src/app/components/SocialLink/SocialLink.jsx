import Link from "next/link";

export default function SocialLinks({ socialHref, children }) {
  return (
    <Link href={socialHref} target="_blank">
      {children}
    </Link>
  );
}
