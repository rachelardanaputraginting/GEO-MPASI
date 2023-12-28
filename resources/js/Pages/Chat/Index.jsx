import Chat from "@/Layouts/Chat";
import React from "react";

export default function Index() {
    return <div className="px-6 py-4">Ayo mulai obrolan</div>;
}

Index.layout = (page) => <Chat children={page} title="Chattan App" />;
