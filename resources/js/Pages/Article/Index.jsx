import Container from "@/Components/Container";

import Hero from "@/Components/Fragment/Hero";
import Home from "@/Layouts/Home";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="Artikel" />

            {/* Hero Start */}
            <Container>
                <Hero>
                    <Hero.HeroLeft
                        title="ARTIKEL"
                        subtitle="Mari bersama-sama mencegah Growth Faltering di Indonesia"
                        text="Indonesia Sehat, Indonesia Hebat Indonesia Kuat"
                        placeholder="Masukkan Lokasi Anda"
                        type="search"
                    ></Hero.HeroLeft>
                    <Hero.HeroRight></Hero.HeroRight>
                </Hero>
            </Container>
            {/* Hero End */}
        </>
    );
}
Index.layout = (page) => <Home children={page} />;
