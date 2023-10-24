import SearchBar from "@/components/searchbar/SearchBar";
import OficialDocs from "@/components/docs/OficialDocs";
import Container from "@/components/Container";
import Repositories from "@/components/repositories/Repositories";
import configs from "@/config";
import OwnedDocs from "@/components/docs/OwnedDocs";

export const revalidate = 3600; // revalidate the data at most every hour
export default async function Home() {
  const { cohort, flags } = configs;
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
        <section className="my-10">{flags.blog && <SearchBar />}</section>
        <section className="my-10">
          <OwnedDocs />
        </section>
        <section className="my-10">
          <OficialDocs />
        </section>
      </Container>
    </main>
  );
}
