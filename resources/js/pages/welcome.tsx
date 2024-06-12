import { Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <meta name="description" content="Halaman selamat datang" />
            </Head>

            <div>
                <h1 className="text-xl text-blue-500">Hello World!</h1>
            </div>
        </>
    );
}
