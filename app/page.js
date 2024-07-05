import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h2 className="text-2xl mb-3">Inventory Manage Software</h2>
      <Link href='/dashboard/home/overview'>View Dashboard</Link>
    </div>
  );
}
