import { useLoaderData } from "@remix-run/react";

export const loader = () => {
  return {
    message: "Hello World!",
    time: new Date(),
  };
};

type LoaderType = Awaited<ReturnType<typeof loader>>;

export default function Test() {
  const data = useLoaderData<LoaderType>();
  //     ^?

  const time = data.time;
  //     ^?

  return (
    <div>
      <h1>{data.message}</h1>
      <h2>{new Date(data.time).toDateString()}</h2>
    </div>
  );
}
