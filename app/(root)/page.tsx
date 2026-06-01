import { auth } from "@/auth";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ search: string | undefined }>;
}) {
  const session = await auth();
  console.log(session);
  const { search } = await searchParams;
  return (
    <>
      <div>{session?.user?.name}</div>
      <div>{search}</div>
    </>
  );
}

export default page;
