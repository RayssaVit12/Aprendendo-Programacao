import { FaGithub } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";

function Footer() {
  return (
    <footer className=" left-0 w-full bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-4 px-4 sm:px-8 border-t border-gray-800 text-center transition-colors duration-300 z-50">
      
      <p className="mb-1 text-sm sm:text-base">
        Desenvolvido por{" "}
        <a
          href="https://github.com/rayssasilvaa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-green-400 hover:underline"
        >
          Rayssa Silva <FaGithub />
        </a>
      </p>

      <p className="text-xs sm:text-sm italic text-gray-400">
        Ainda em desenvolvimento{" "}
        <GoAlertFill className="inline w-4 h-4 align-middle text-yellow-400 ml-1" />
      </p>

    </footer>
  );
}

export default Footer;