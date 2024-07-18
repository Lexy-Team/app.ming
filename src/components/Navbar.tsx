import { useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { useAccount } from "wagmi";
import { toast } from "sonner"

const Navbar = () => {
  const account = useAccount();
  const { connect, isSuccess } = useConnect();
  const { disconnect } = useDisconnect();

  const handleWalletConnect = async () => {
    await connect({ connector: injected() })
    if(isSuccess) toast("Login Successful!")
  }

  return (
    <nav className="container mx-auto py-3 flex items-center justify-between text-sm">
      <div className="flex items-center gap-8">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://avatars.githubusercontent.com/u/172090446?s=48&v=4"
            className="w-7"
            alt=""
          />
          <p className="font-semibold text-lg">Ming</p>
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
          onClick={() => handleWalletConnect()}
        >
          🗿Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
