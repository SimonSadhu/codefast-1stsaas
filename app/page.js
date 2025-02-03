import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Simon";
  return (
    <main>
      <h1 className="text-3xl font-bold p-4">
        Collect customer feedback to build better products
      </h1>
      <div>
        Create a feedback board in minutes, prioritize features , and build
        products your customers will love.
      </div>

      <ButtonLogin isLoggedIn={isLoggedIn} name={name}>
        <div>This is a test</div>
      </ButtonLogin>
    </main>
  );
}
