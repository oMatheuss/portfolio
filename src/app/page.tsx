import Anchor from "@/components/Anchor";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="mb-8">
        <hr className="border-y-4 border-red-600" />
      </nav>
      <main className="text-lg mx-2 sm:max-w-prose sm:mx-auto leading-relaxed antialiased">
        <Image
          src="/android-chrome-192x192.png"
          width={192}
          height={192}
          alt="Logo"
          className="h-12 w-12 rounded-md mb-4"
        />
        <h1 className="text-4xl text-black bold mb-2 tracking-wider font-extrabold dark:text-white">
          Hi, I&apos;m Matheus Moura
        </h1>
        <h2 className="text-2xl text-red-600 tracking-wider mb-6">
          FullStack Developer
        </h2>
        <p className="mb-4">
          I work mostly with building light and fast web applications.
        </p>
        <p className="mb-4">
          I believe development is an art that can build a better world.
        </p>
        <p className="mb-4">
          I have a passion for creating games that can entertain people all over
          the world. One of them is{" "}
          <Anchor href="https://www.typergame.app/" target="_blank">
            TyperGame
          </Anchor>
          , for now only available in Portuguese.
        </p>
        <p className="mb-4">
          I&apos;m brazilian, and I live in Uberlândia - MG, Brazil.
        </p>
        <p className="mb-4">
          You can contact me at{" "}
          <Anchor href="mailto:matheussmoura@outlook.com">
            matheussmoura@outlook.com
          </Anchor>
          .
        </p>
      </main>
    </>
  );
}
