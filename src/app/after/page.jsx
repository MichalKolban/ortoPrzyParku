import AfterPage from "./AfterPage";

export const metadata = {
  title: "Website title",
  description: "My description",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <AfterPage />;
}
