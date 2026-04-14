import Hero from "@/components/Hero";
import QuestLog from "@/components/QuestLog";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full h-full flex-col py-32 px-16 bg-white dark:bg-black">
        
        <Hero />
          <QuestLog/>

      </main>
    </div>
  );
}
