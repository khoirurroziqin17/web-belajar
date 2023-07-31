import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "./Button";
import { Modal } from "./Overlay";
import Image from "next/image";

const data = [
  {
    kelas: "7B",
    link: "https://docs.google.com/spreadsheets/d/10mgegV2lPf2mW90r-mwhvfVNUcthe90Bj_L2udRycrg/edit?usp=sharing",
    token: "ipa7b",
  },
  {
    kelas: "7C",
    link: "https://docs.google.com/spreadsheets/d/1VpDbrksuUgP9N8FCB3ZFpIs0I14MOof3Jxyy3w1cD7I/edit?usp=sharing",
    token: "ipa7c",
  },
  {
    kelas: "7D",
    link: "https://docs.google.com/spreadsheets/d/1cCpFp6t_CbQFBmFhaS5Ha__kW543S7mwu2unrwFMRo4/edit?usp=sharing",
    token: "ipa7d",
  },
  {
    kelas: "8B",
    link: "https://docs.google.com/spreadsheets/d/1YvamkBzG1GRVH64SOb-pQRmmA-Om9Eo0s7DDmlf57WY/edit?usp=sharing",
    token: "ipa8b",
  },
  {
    kelas: "8C",
    link: "https://docs.google.com/spreadsheets/d/1gNcq9-foEDH6Vt3wUIscWG-jFj8JdUE60P8cmpwRn_g/edit?usp=sharing",
    token: "ipa8c",
  },
  {
    kelas: "9C",
    link: "https://docs.google.com/spreadsheets/d/1sz1HYhBc9llW_QWNLEPBLWXNNYt0780qPYaRQ5gJHJQ/edit?usp=sharing",
    token: "ipa9c",
  },
  {
    kelas: "9D",
    link: "https://docs.google.com/spreadsheets/d/1G9zPoSAoPpWTLB0bMNeqlS4OvcFbfEwaeo3L0v4acNw/edit?usp=sharing",
    token: "ipa9d",
  },
];

export default function DaftarNilai() {
  return (
    <div className="bg-white py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Daftar Nilai
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Rekapitulasi nilai hasil siswa mengerjakan tugas
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((d) => (
            <Post key={d.kelas} kelas={d.kelas} link={d.link} token={d.token} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Post({ kelas, link, token }) {
  const router = useRouter();
  const [confirmToken, setConfirmToken] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [invalid, setInvalid] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setInvalid(false);
  }
  function sendModal() {
    if (token == confirmToken) {
      router.push(link);
    } else {
      setInvalid(true);
    }
  }

  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-400 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
      <Image
        src={"/cover.avif"}
        width={800}
        height={400}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 to-gray-900/0" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Daftar Nilai Kelas {kelas}
        </button>
      </h3>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendModal();
          }}
        >
          <div className="relative rounded-md shadow-sm mt-2">
            <input
              type="text"
              className={`block w-full text-sm leading-6 rounded-md border-0 py-1.5 pl-2 pr-10 outline-none ring-1 ring-inset   focus:ring-2 focus:ring-inset  ${
                invalid
                  ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500"
                  : "text-gray-900 ring-gray-300 placeholder:text-gray-300 focus:ring-gray-500"
              }`}
              onChange={(e) => setConfirmToken(e.target.value)}
              placeholder="Masukkan token"
            />
            {invalid && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
          </div>
          {invalid && (
            <p className="mt-2 text-sm text-red-600">Token tidak cocok.</p>
          )}
          <div className="mt-4 space-x-2">
            <Button intent={"danger"} onClick={closeModal}>
              Batal
            </Button>
            <Button intent={"primary"} onClick={sendModal}>
              Kirim
            </Button>
          </div>
        </form>
      </Modal>
    </article>
  );
}
