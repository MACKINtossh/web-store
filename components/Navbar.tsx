import { UserButton, auth } from "@clerk/nextjs";
import { MainNav } from "./MainNav";
import StoreSwitch from "./StoreSwitch";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

// Navbar is asynchronous because we are calling the prisma database for the stores

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId: userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitch items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
