import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { manufacturers } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";

interface HomeProps {
  searchParams: {
    model: string;
    manufacturer: string;
    year: number;
    limit: number;
    fuel: string;
  };
}

export default async function Home({
  searchParams: { model, manufacturer, fuel, year, limit },
}: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: manufacturer || "",
    year: year || 2022,
    fuel: fuel || "",
    limit: limit || 10,
    model: model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black font-bold text-xl">Oops, no results.</h2>
          </div>
        )}
      </div>
    </main>
  );
}
