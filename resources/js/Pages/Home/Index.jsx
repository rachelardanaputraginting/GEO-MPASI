import Container from "@/Components/Container";
import Footer from "@/Components/Footer";
import Home from "@/Layouts/Home";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="Our Menus" />

            <Container className="flex justify-center"></Container>

            <Footer />
        </>
    );
}
Index.layout = (page) => <Home children={page} />;
