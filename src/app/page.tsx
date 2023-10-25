import configs from "@/config";
import Container from "@/components/Container";
import { OwnedDocs, Repositories, OfficialDocs } from "@/components/landing";

export const revalidate = 3600; // revalidate the data at most every hour

export default async function Home() {
  const { cohort } = configs;
  return (
    <main className="my-24">
      <Container>
        <section>
          <h1 className="text-3xl">
            Documentación y repositorios de la cohorte {cohort.name}
          </h1>
        </section>
        <section className="my-10">
          <Repositories />
        </section>

        <section className="my-10">
          <OwnedDocs />
        </section>
        <section className="my-10">
          <OfficialDocs />
        </section>
      </Container>
    </main>
  );
}
