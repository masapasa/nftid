import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SampleDapp } from "../target/types/sample_dapp";

describe("sample-dapp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SampleDapp as Program<SampleDapp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
