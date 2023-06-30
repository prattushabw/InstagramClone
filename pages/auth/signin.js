import { getProviders, signIn } from "next-auth/react";

function SignIn({ providers }) {

  return (
    <>
      {/* <Header /> */}
      <div className="container flex mx-auto max-w-screen-md items-center h-screen">
        <div className="flex w-3/5">
          <img
            src="https://blog.yoocare.com/wp-content/uploads/2017/11/Instagram3.png"
            alt=""
          />
        </div>
        <div className="flex flex-col w-2/5">
          <h1 className="flex justify-center w-full">
            <img
              src="https://links.papareact.com/ocw"
              alt=""
              className="mt-2 mb-4"
            />
          </h1>
          <div className="flex flex-col text-center">
            <p className="font-xs italic text-center">
              This is not a REAL app, it is built for educational purposes only 
            </p>
            <div className="mt-10">
              {Object.values(providers).map((provider) => (
                <div key={provider.id}>
                  <button
                    className="p-3 bg-blue-500 rounded-lg text-white"
                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  >
                    Sign in with {provider.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;