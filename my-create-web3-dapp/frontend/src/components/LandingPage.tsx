import { Flex, Heading } from "@chakra-ui/react";
import MainNav from "./MainNav";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useNavigate } from "react-router-dom";
import { HasMinted, MintToken } from "../hooks/MintToken";

// const { address, isConnecting, isDisconnected } = useAccount();

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Flex
      width="100%"
      height="100vh"
      flexDirection="column"
      bgImage="url('pokemon.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      p="40px 20px"
      textAlign="center"
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <MainNav />

      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        flexGrow={1}
      >
        <Heading
          as="h5"
          size="1xl"
          fontWeight="bold"
          color="darkgreen"
          marginTop="1px"
          marginBottom="1px"
        >
          Welcome to PokeWars
        </Heading>

        {/* <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            const ready = mounted && authenticationStatus !== "loading";
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === "authenticated");

            // Step 3
            const hasUserMinted = HasMinted();

            if (connected) {
              if (!hasUserMinted) {
                navigate("/new-user");
              } else {
                navigate("/dashboard");
              }
            }

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                    accentColor: "7b3fe4",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        style={{
                          backgroundColor: "#7b3fe4",
                          color: "white",
                          borderRadius: "8px",
                          padding: "10px 15px",
                          fontFamily: "system-ui",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        Connect Wallet
                      </button>
                    );
                  }
                  if (chain.unsupported) {
                    return (
                      <button onClick={openChainModal} type="button">
                        Wrong network
                      </button>
                    );
                  }
                  return (
                    <div style={{ display: "flex", gap: 12 }}>
                      <button
                        onClick={openChainModal}
                        style={{ display: "flex", alignItems: "center" }}
                        type="button"
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 12,
                              height: 12,
                              borderRadius: 999,
                              overflow: "hidden",
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                style={{ width: 12, height: 12 }}
                              />
                            )}
                          </div>
                        )}
                        {chain.name}
                      </button>
                      <button onClick={openAccountModal} type="button">
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ""}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom> */}
      </Flex>
    </Flex>
  );
}

export default LandingPage;
