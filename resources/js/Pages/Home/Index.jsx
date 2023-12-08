import Container from "@/Components/Container";

import Hero from "@/Components/Fragment/Hero";
import Home from "@/Layouts/Home";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="Beranda" />

            {/* Hero Start */}
            <Container>
                <Hero>
                    <Hero.HeroLeft
                        title="GEO-MPASI"
                        subtitle="Mari bersama-sama mencegah Growth Faltering di Indonesia"
                        location="Yogyakarta"
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
