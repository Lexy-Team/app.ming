import { useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { useAccount } from "wagmi";

const Navbar = () => {
  const account = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <nav className="container mx-auto py-3 flex items-center justify-between text-sm">
      <div className="flex items-center gap-8">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://avatars.githubusercontent.com/u/172090446?s=48&v=4"
            className="w-5"
            alt=""
          />
          <p className="font-semibold text-md">Ming</p>
        </a>
        {/* <div>
          <Link to="/" className="[&.active]:font-semibold">
            Home
          </Link>
        </div> */}
      </div>
      {account.isConnected ? (
        <div className="flex items-center gap-2">
          <p>{account.address}</p>
          <button
            className="bg-black text-white px-2 py-1"
            onClick={() => disconnect()}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="font-semibold"
          onClick={() => connect({ connector: injected() })}
        >
          🗿Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
