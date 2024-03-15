import Store from "./store/page";

export type PageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function App(props: PageProps) {
  return <Store {...props} />;
}
