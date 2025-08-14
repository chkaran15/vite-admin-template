import { createRouter, RouterProvider } from "@tanstack/react-router";

type AppProps = { router: ReturnType<typeof createRouter> };

function App({ router }: AppProps) {
  return (
    <main className="flex h-screen justify-center items-center flex-col">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
