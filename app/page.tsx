import { cookies } from "next/headers";
import { ParticipationSection } from "@/components/ParticipationSection";
import { InfoBlock } from "@/components/InfoBlock";
import { WeddingDetails } from "@/components/WeddingDetails";
import { WeddingHero } from "@/components/WeddingHero";
import { LoginForm } from "@/components/LoginForm";
import { Footer } from "@/components/Footer/Footer";

export default async function Home() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("auth");
  const isAuthenticated = authCookie?.value === "authenticated";

  return (
    <>
      {!isAuthenticated ? (
        <LoginForm />
      ) : (
        <main className="bg-white">
          <WeddingHero />
          <ParticipationSection />
          <WeddingDetails
            lat={48.52163540560999}
            lon={8.83657451397345}
            title="Kirchliche Trauung 13:30 Uhr"
            address={["Grabenstraße 1", "71149 Bondorf"]}
          />
          <WeddingDetails
            lat={48.51244416752631}
            lon={8.828957927146806}
            title="Feierlocation"
            address={["Oberer Hauserweg 50", "71149 Bondorf"]}
            iframeDelay={400}
          />
          <InfoBlock />
        </main>
      )}
      <Footer showNames={isAuthenticated} />
    </>
  );
}
