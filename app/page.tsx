
import Sidebar from "@/components/navigation/Sidebar/Sidebar";
import Topbar from "@/components/navigation/Topbar/Topbar";

export default function Home() {
  return (
    <main className="overflow-hidden border m-2 p-2">
      <Topbar />
      <div>Homepage</div>
      <Sidebar />
    </main>
  )
}
